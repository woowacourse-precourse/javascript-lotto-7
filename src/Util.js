export function checkRange(number, min, max) {
  return number < min || number > max;
}

export function checkDuplicate(array) {
  return new Set(array).size !== array.length;
}
