export default function createInt8TypedArray(length, position, value) {
  const ab = new ArrayBuffer(length);
  const dv = new DataView(ab);

  if (position > length) {
    throw new Error('Position outside range');
  }
  dv.setInt8(position, value);
  return dv;
}
