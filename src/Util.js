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

export function roundUp(num, fix) {
  return Math.round(num * 10 ** fix) / 10 ** fix;
}

export function calculatePercentage(totalPrize, totalInvested, fix) {
  const percentage = (totalPrize / totalInvested) * 100;

  console.log(percentage);
  return roundUp(percentage, fix).toFixed(fix);
}
