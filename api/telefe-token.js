export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml',
    'Referer': 'https://sudamericaplay2.com/',
  };

  try {
    // Opción 1: scrape sudamericaplay2.com — ya tiene el token inyectado server-side
    const r1 = await fetch('https://sudamericaplay2.com/canal_41/telefe_soloargetntina_ios.php', { headers });
    const html1 = await r1.text();
    const m1 = html1.match(/const miStreamUrl\s*=\s*"([^"]+)"/);
    if (m1) {
      return res.status(200).json({ url: m1[1].replace(/\\/g, '') });
    }
  } catch (_) {}

  try {
    // Opción 2: mitelefe.com — fetch página + tokenize
    const r2 = await fetch('https://www.mitelefe.com/telefe-en-vivo', {
      headers: { ...headers, 'Referer': 'https://www.mitelefe.com/' },
    });
    const html2 = await r2.text();
    const m2 = html2.match(/data-player-url="([^"]+)"/);
    if (!m2) throw new Error('No stream URL on mitelefe.com');

    const tokenRes = await fetch('https://www.mitelefe.com/vidya/tokenize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://www.mitelefe.com',
        'Referer': 'https://www.mitelefe.com/telefe-en-vivo',
        'User-Agent': headers['User-Agent'],
      },
      body: JSON.stringify({ url: m2[1] }),
    });
    const tokenData = await tokenRes.json();
    return res.status(200).json({ url: tokenData.url });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
