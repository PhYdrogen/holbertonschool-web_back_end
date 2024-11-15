export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const i8view = new Int8Array(buffer);
  i8view[position] = value;
  return new DataView(buffer);
}
