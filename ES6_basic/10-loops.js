export default function appendToEachArrayValue(array, appendString) {
  const clone = [];
  for (const [idx, value] of array.entries()) {
    clone[idx] = appendString + value;
  }
  return clone;
}
