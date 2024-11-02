export function isInteger(value) {
  const number = Number(value);
  if (Number.isNaN(number)) return false;
  return number === parseInt(value, 10);
}

export function isMultipleOfThousand(value) {
  return Number(value) % 1000 === 0;
}

export function isLengthSix(array) {
  return array.length === 6;
}

export function isAllInteger(array) {
  return array.every((value) => isInteger(value));
}

export function isLottoRange(array) {
  return array.every((value) => value >= 1 && value <= 45);
}

export function isUnique(array) {
  return new Set(array).size === array.length;
}

export function isBonusNumberDuplicated(winningNumbers, bonusNumber) {
  return winningNumbers.includes(Number(bonusNumber));
}
