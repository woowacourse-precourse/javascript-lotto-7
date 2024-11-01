export function checkRange(number, min, max) {
  return number < min || number > max;
}

export function checkDuplicate(array) {
  return new Set(array).size !== array.length;
}

export function asendingSort(array) {
  return array.sort((a, b) => a - b);
}
