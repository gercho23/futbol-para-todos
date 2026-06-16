export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    // 1. Fetch mitelefe.com to extract the stream URL
    const pageRes = await fetch('https://www.mitelefe.com/telefe-en-vivo', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
      }
    });
    const html = await pageRes.text();

    const match = html.match(/data-player-url="([^"]+)"/);
    if (!match) {
      return res.status(500).json({ error: 'No stream URL found on mitelefe.com' });
    }
    const streamUrl = match[1];

    // 2. Tokenize the URL via mitelefe's endpoint
    const tokenRes = await fetch('https://www.mitelefe.com/vidya/tokenize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://www.mitelefe.com',
        'Referer': 'https://www.mitelefe.com/telefe-en-vivo',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      },
      body: JSON.stringify({ url: streamUrl }),
    });
    const tokenData = await tokenRes.json();

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ url: tokenData.url });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
