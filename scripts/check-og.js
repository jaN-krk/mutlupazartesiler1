const urls = [
  'https://www.instagram.com/p/DScfEyXjf0d/',
  'https://www.instagram.com/p/DRmaaf4jeDK/',
  'https://www.instagram.com/p/DR4cAVXDSNL/',
  'https://www.instagram.com/p/DRCNKzCDYir/',
  'https://www.instagram.com/p/DQ9FDizjRVj/'
];

(async () => {
  for (const url of urls) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log('\nURL:', url, 'status', r.status);
      const t = await r.text();
      const og = (t.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i) || [])[1] || null;
      const display = (t.match(/\"display_url\":\"([^\"]+)\"/i) || [])[1] || null;
      console.log('og:image', og);
      console.log('display_url', display ? display.replace(/\\u0026/g, '&') : null);
    } catch (e) {
      console.error('ERR', url, e.message || e);
    }
  }
})();