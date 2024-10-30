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

export function isGreaterThan(number, compareNumber) {
  return number > compareNumber;
}

export function isLessThan(number, compareNumber) {
  return number < compareNumber;
}

export function isEqualTo(number, compareNumber) {
  return number === compareNumber;
}
