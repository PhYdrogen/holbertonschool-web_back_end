export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const i8view = new Int8Array(arr);
  i8view[position] = value;
  return arr;
}
