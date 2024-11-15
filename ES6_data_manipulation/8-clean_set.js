export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  const vs = [...set];
  return vs.filter((val) => val.startsWith(startString)).map((val) => val.replace(startString, '')).map(val => val.replace('-', '')).join('-');
}
