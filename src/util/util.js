export function checkRange(number, min, max) {
  return number < min || number > max;
}

export function checkDuplicate(array) {
  return new Set(array).size !== array.length;
}

export function asendingSort(array) {
  return array.sort((a, b) => a - b);
}

export function intersection(array1, array2) {
  return array1.filter((element) => array2.includes(element));
}

export function roundUp(num, decimalPlace) {
  return Math.round(num * 10 ** decimalPlace) / 10 ** decimalPlace;
}

export function calculatePercentage(numerator, denominator, decimalPlace) {
  const percentage = (numerator / denominator) * 100;
  return roundUp(percentage, decimalPlace).toFixed(decimalPlace);
}
