export default function hasValuesFromArray(argSet, argArr) {
  return argArr.every((arrElement) => argSet.has(arrElement));
}
