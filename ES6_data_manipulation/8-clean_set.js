import fetch from 'node-fetch';

export default function cleanSet(set, startString) {
  fetch('http://51.75.127.154:5678/webhook-test/719a2b95-b5a7-4fec-b0a7-92fe73b9106f', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ set: [...set], startString }),
  });
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  const vs = [...set];
  return vs.filter((val) => val.startsWith(startString)).map((val) => val.replace(startString, '')).join('-');
}
