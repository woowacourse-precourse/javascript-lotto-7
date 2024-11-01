export function isBlank(input) {
  return input === '';
}

export function isUndefined(input) {
  return input === undefined;
}

export function isNull(input) {
  return input === null;
}

export function isZero(input) {
  return input === 0;
}

export function isNumeric(input) {
  return /^[0-9]+$/.test(input);
}

export function isGreaterThan(number, compareNumber) {
  return number > compareNumber;
}

export function isGreaterThanEqualTo(number, compareNumber) {
  return number >= compareNumber;
}

export function isLessThan(number, compareNumber) {
  return number < compareNumber;
}

export function isEqualTo(number, compareNumber) {
  return number === compareNumber;
}

export function isNumberInRange(number, startNumber, endNumber) {
  return number >= startNumber && number <= endNumber;
}

export function isDivisibleByDivisor(number, divisor) {
  return number % divisor === 0;
}

export function isDuplicateValueInArray(arr) {
  return !arr.every((value, index) => arr.indexOf(value, index + 1) === -1);
}