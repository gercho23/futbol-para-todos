export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  const target = req.query.url;
  if (!target) return res.status(400).send('missing url');

  try {
    const upstream = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      },
    });

    const contentType = upstream.headers.get('content-type') || '';
    const isPlaylist = target.includes('.m3u8') || contentType.includes('mpegurl') || contentType.includes('vnd.apple');

    if (isPlaylist) {
      const text = await upstream.text();
      const base = new URL(target);
      const rewritten = text.split('\n').map(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return line;
        const abs = new URL(trimmed, base).toString();
        return '/api/hls-proxy?url=' + encodeURIComponent(abs);
      }).join('\n');
      res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
      return res.status(200).send(rewritten);
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Type', contentType || 'video/mp2t');
    return res.status(upstream.status).send(buf);
  } catch (err) {
    return res.status(500).send('proxy error: ' + err.message);
  }
}
