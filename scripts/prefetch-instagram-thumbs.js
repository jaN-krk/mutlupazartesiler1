const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Prefetch script removed per request.
const DATA_FILE = null;
const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'instagram_thumbs');

function hashString(s) {
  return crypto.createHash('sha1').update(s).digest('hex');
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
  return await res.text();
}

async function downloadUrlToFile(url) {
  try {
    const extMatch = url.match(/\.([a-zA-Z0-9]{3,4})(?:[?#]|$)/);
    let ext = extMatch ? extMatch[1] : 'jpg';
    const h = hashString(url);
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
    const dest = path.join(OUT_DIR, `${h}.${ext}`);
    if (fs.existsSync(dest)) return `/images/instagram_thumbs/${h}.${ext}`;

    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`Image fetch failed ${res.status}`);
    const contentType = res.headers.get('content-type') || '';
    if (!extMatch) {
      if (contentType.includes('png')) ext = 'png';
      else if (contentType.includes('gif')) ext = 'gif';
      else ext = 'jpg';
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    return `/images/instagram_thumbs/${h}.${ext}`;
  } catch (e) {
    return null;
  }
}

async function getOgImage(url) {
  try {
    const html = await fetchHtml(url);
    const ogMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i);
    if (ogMatch) return { type: 'remote', url: ogMatch[1] };
    const thumbMatch = html.match(/"display_url\":\"([^\"]+)\"/i);
    if (thumbMatch) return { type: 'remote', url: thumbMatch[1].replace(/\\u0026/g, '&') };

    // try oEmbed
    try {
      const oe = await fetch(`https://api.instagram.com/oembed?url=${encodeURIComponent(url)}`);
      if (oe.ok) {
        const oj = await oe.json();
        const thumb = oj.thumbnail_url || oj.thumbnail || null;
        if (thumb) return { type: 'remote', url: thumb };
      }
    } catch (e) {}

    // Puppeteer fallback: render page and try to extract visible image or take a screenshot
    try {
      const puppeteer = require('puppeteer');
      const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0');
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // try to find a visible image inside the article
      const img = await page.evaluate(() => {
        const m = document.querySelector('meta[property="og:image"]');
        if (m && m.getAttribute) {
          const c = m.getAttribute('content');
          if (c) return c;
        }
        const imgEl = document.querySelector('article img');
        if (imgEl && (imgEl.src || imgEl.getAttribute('src'))) return imgEl.src || imgEl.getAttribute('src');
        return null;
      });

      if (img) {
        await browser.close();
        return { type: 'remote', url: img };
      }

      // if no image, take a screenshot of the article element
      const article = (await page.$('article')) || (await page.$('main')) || (await page.$('body'));
      if (article) {
        const buf = await article.screenshot({ type: 'jpeg', quality: 80 });
        const h = hashString(url + '_screenshot');
        if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
        const dest = path.join(OUT_DIR, `${h}.jpg`);
        fs.writeFileSync(dest, buf);
        await browser.close();
        return { type: 'local', path: `/images/instagram_thumbs/${h}.jpg` };
      }

      await browser.close();
    } catch (e) {
      // ignore puppeteer failures
    }

    return null;
  } catch (e) {
    return null;
  }
}
// Prefetch script removed per request.
