export default function cleanSet(set, startString) {
  let newString = '';

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
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
