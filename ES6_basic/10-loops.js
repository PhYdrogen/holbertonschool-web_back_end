export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const [idx, word] of array.entries()) {
    newArr[idx] = appendString + word;
  }

  return newArr;
}
