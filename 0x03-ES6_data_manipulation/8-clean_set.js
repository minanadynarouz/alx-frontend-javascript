export default function cleanSet(set, startString) {
  let newString = '';

  if (startString === '') {
    return newString;
  }

  for (const ele of set) {
    if (ele.startsWith(startString)) {
      newString += `${ele.slice(startString.length)}-`;
    }
  }

  if (newString.endsWith('-')) {
    newString = newString.slice(0, -1);
  }

  return newString;
}
