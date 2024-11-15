export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const i8view = new Int8Array(buffer);
    i8view[position] = value;
    return new DataView(buffer);
  } catch (e) {
    throw 'Position outside range';
  }
}
