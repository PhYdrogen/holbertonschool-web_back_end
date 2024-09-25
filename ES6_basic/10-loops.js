export default function appendToEachArrayValue(array, appendString) {
  const clone = array;
  for (const idx of array) {
    const value = array[idx];
    clone[idx] = appendString + value;
  }
  return clone;
}
