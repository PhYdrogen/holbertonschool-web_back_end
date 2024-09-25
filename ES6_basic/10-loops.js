export default function appendToEachArrayValue(array, appendString) {
  const clone = [];
  for (const e of array.entries()) {
    clone[e[0]] = appendString + e[1];
  }
  return clone;
}
