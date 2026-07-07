function decodeField(pairs, shift) {
  pairs.sort((a, b) => a[0] - b[0]);
  let out = '';
  for (const [, b64] of pairs) {
    const digits = Buffer.from(b64, 'base64').toString('utf8').replace(/[^0-9]/g, '');
    out += String.fromCharCode(parseInt(digits, 10) - shift);
  }
  return out;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  const id = req.query.id || 'dsports1';

  try {
    const r = await fetch(`https://stream-xhd.com/channel2/?id=${id}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        'Accept': 'text/html',
      },
    });
    const html = await r.text();

    const fields = {};
    const varNames = ['channelUrl', 'keyId', 'keyValue'];
    for (const name of varNames) {
      const re = new RegExp(
        `var ${name}="",\\s*\\w+=\\[\\];\\s*\\w+=(\\[[\\s\\S]*?\\]\\]);[\\s\\S]*?function \\w+\\(x\\)\\{return String\\.fromCharCode\\(parseInt\\(x\\)-(\\d+)\\);\\}`
      );
      const m = html.match(re);
      if (!m) throw new Error(`No se encontró ${name} en la página`);
      const pairs = JSON.parse(m[1]);
      const shift = parseInt(m[2], 10);
      fields[name] = decodeField(pairs, shift);
    }

    return res.status(200).json(fields);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
