import { ERROR_MESSAGES } from './constants.js';

export function validateNumbersLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGES.lottoNumberCountError);
  }
}

export function validateDuplicatelottoNumber(numbers) {
  const set = new Set(numbers);
  if (numbers.length !== set.size) {
    throw new Error(ERROR_MESSAGES.lottoNumberDuplicateError);
  }
}

export function validateNumberRange(number) {
  if (number < 1 || number > 45) {
    throw new Error(ERROR_MESSAGES.lottoNumberRangeError);
  }
}

export function validateBuyAmountLength(amount) {
  if (amount.length === 0) {
    throw new Error(ERROR_MESSAGES.lottoAmoutEmptyError);
  }
}

export function validateBuyAmountUnit(amount) {
  if (amount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.lottoAmountUnitError);
  }
}

export function validateBuyAmountType(amount) {
  if (isNaN(Number(amount))) {
    throw new Error(ERROR_MESSAGES.lottoAmountTypeError);
  }
}
