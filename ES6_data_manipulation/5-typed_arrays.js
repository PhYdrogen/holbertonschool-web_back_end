export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const i8view = new Int8Array(buffer);
  try {
    i8view[position] = value;
  } catch (e) {
    throw 'Position outside range';
  }
  return new DataView(buffer);
}
