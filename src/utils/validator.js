import {
  LOTTO_PRICE,
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_MAX,
} from '../constants/numbers.js';

export function isInteger(value) {
  const number = Number(value);
  if (Number.isNaN(number)) return false;
  return number === parseInt(value, 10);
}

export function isMultipleOfLottoPrice(value) {
  return Number(value) % LOTTO_PRICE === 0;
}

export function isLengthLottoCount(array) {
  return array.length === LOTTO_NUMBER_COUNT;
}

export function isAllInteger(array) {
  return array.every((value) => isInteger(value));
}

export function isLottoRange(array) {
  return array.every((value) => value >= LOTTO_NUMBER_MIN && value <= LOTTO_NUMBER_MAX);
}

export function isUnique(array) {
  return new Set(array).size === array.length;
}

export function isBonusNumberDuplicated(winningNumbers, bonusNumber) {
  return winningNumbers.includes(Number(bonusNumber));
}
