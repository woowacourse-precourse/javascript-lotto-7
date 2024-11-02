export function isNumber(value) {
  return !Number.isNaN(Number(value));
}

export function isMultipleOfThousand(value) {
  return Number(value) % 1000 === 0;
}

export function isLengthSix(array) {
  return array.length === 6;
}

export function isAllNumber(array) {
  return array.every((value) => isNumber(value));
}

export function isLottoRange(array) {
  return array.every((value) => value >= 1 && value <= 45);
}

export function isUnique(array) {
  return new Set(array).size === array.length;
}
