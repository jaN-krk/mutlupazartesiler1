const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const outDir = path.join(process.cwd(), 'tmp', 'debug-ui');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0');

  const pagesToCheck = ['http://localhost:3001/', 'http://localhost:3001/admin/instagram-videos'];
  const results = [];

  for (const url of pagesToCheck) {
    const ctx = { url, console: [], errors: [], network: [] };

    // quick node fetch check to avoid transient connect refused in Puppeteer
    try {
      // quick raw http check (works when global fetch may fail)
      const check = (u) => new Promise((resolve, reject) => {
        const http = require(u.startsWith('https:') ? 'https' : 'http');
        const req = http.get(u, { timeout: 5000 }, (res) => {
          res.resume();
          resolve(res.statusCode);
        });
        req.on('error', (err) => reject(err));
        req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
      });

      let status;
      try { status = await check(url); }
      catch (e1) {
        const u = new URL(url);
        if (u.hostname === 'localhost') {
          u.hostname = '127.0.0.1';
          status = await check(u.toString());
        } else throw e1;
      }
      ctx.fetchStatus = status;
    } catch (e) {
      ctx.fetchError = String(e);
      results.push(ctx);
      continue; // skip puppeteer goto if fetch fails
    }

    page.on('console', (msg) => {
      try { ctx.console.push({ type: msg.type(), text: msg.text() }); } catch (e) {}
    });
    page.on('pageerror', (err) => ctx.errors.push(String(err)));
    page.on('response', async (res) => {
      try {
        const rUrl = res.url();
        const status = res.status();
        ctx.network.push({ url: rUrl, status });
      } catch (e) {}
    });

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // wait a bit for late renders
      await page.waitForTimeout(1000);
      const shot = path.join(outDir, (url.replace(/[:\/]/g, '_') + '.png').replace(/^_+/,'') );
      await page.screenshot({ path: shot, fullPage: true });
      ctx.screenshot = path.relative(process.cwd(), shot);
    } catch (e) {
      ctx.error = String(e);
    }

    results.push(ctx);
    // remove listeners so they don't accumulate
    page.removeAllListeners('console');
    page.removeAllListeners('pageerror');
    page.removeAllListeners('response');
  }

  await browser.close();

  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(results, null, 2));
  console.log('Debug UI results saved to', path.relative(process.cwd(), outDir));
  process.exit(0);
})();