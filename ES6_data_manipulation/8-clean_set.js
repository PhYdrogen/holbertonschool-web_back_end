export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  const vs = [...set];
  //   const arr = [];
  //   vs.filter((val) => val.startsWith(startString)).map((e) => arr.push(e.replace(startString, '')));
  //   return arr.filter((e) => e != '').join('-');
  return vs.filter((val) => val.startsWith(startString)).map((val) => val.replace(startString, '')).filter((val) => val != startString).join('-');
}
