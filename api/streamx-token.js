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

  const stream = req.query.stream || 'dsports';

  try {
    const r = await fetch(`https://streamx-hd.com/live1.php?stream=${stream}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        'Accept': 'text/html',
      },
    });
    const html = await r.text();

    const arrMatch = html.match(/playbackURL="",(\w+)=\[\],_s="[^"]*";\s*\1=(\[\[[\s\S]*?\]\]);/);
    if (!arrMatch) throw new Error('No se encontró el array de playbackURL');
    const varName = arrMatch[1];
    const pairs = JSON.parse(arrMatch[2]);

    const sortMatch = html.match(new RegExp(`${varName}\\.sort\\([^)]*\\);\\s*var k=(\\w+)\\(\\)\\+(\\w+)\\(\\);`));
    if (!sortMatch) throw new Error('No se encontraron las funciones de shift');
    const [, fn1, fn2] = sortMatch;

    const fn1Match = html.match(new RegExp(`function ${fn1}\\(\\)\\{return (\\d+);\\}`));
    const fn2Match = html.match(new RegExp(`function ${fn2}\\(\\)\\{return (\\d+);\\}`));
    if (!fn1Match || !fn2Match) throw new Error('No se encontraron los valores de shift');

    const shift = parseInt(fn1Match[1], 10) + parseInt(fn2Match[1], 10);
    const url = decodeField(pairs, shift);

    return res.status(200).json({ url });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
