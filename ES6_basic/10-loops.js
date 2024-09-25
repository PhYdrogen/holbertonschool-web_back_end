export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx of array) {
    const value = array[idx];
    newArr[idx] = appendString + value;
  }

  return newArr;
}
