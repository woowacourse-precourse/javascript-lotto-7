import { ERROR_MESSAGES } from './constants.js';

export function validateNumbersLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGES.lottoCountError);
  }
}

export function validateDuplicatelottoNumber(numbers) {
  const set = new Set(numbers);
  if (numbers.length !== set.size) {
    throw new Error(ERROR_MESSAGES.lottoDuplicateNumberError);
  }
}

export function validateNumberRange(number) {
  if (number < 1 || number > 45) {
    throw new Error(ERROR_MESSAGES.lottoRangeError);
  }
}

export function validateBuyAmount(amount) {
  if (amount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.lottoRangeError);
  }
}

export function validatePurchaseAmount(amount) {
  if (isNaN(Number(amount))) {
    throw new Error(ERROR_MESSAGES.lottoAmountNumberError);
  }
}
