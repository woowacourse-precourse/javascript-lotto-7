import LOTTO_NUMBERS from '../constants/config.js';
import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

export function validateLength(numbers) {
  if (numbers.length !== LOTTO_NUMBERS.NUMBER_LENGTH) {
    throw new CustomError(ERROR.INVALID_LOTTO_NUMBER_COUNT);
  }
}

export function validateType(numbers) {
  numbers.forEach((number) => {
    if (typeof number !== 'number' || Number.isNaN(number)) {
      throw new CustomError(ERROR.INVALID_NUMBER_TYPE);
    }
  });
}

export function validateNoDuplicates(numbers) {
  if (new Set(numbers).size !== LOTTO_NUMBERS.NUMBER_LENGTH) {
    throw new CustomError(ERROR.DUPLICATE_LOTTO_NUMBER);
  }
}

export function validateRange(numbers) {
  numbers.forEach((number) => {
    if (
      number < LOTTO_NUMBERS.LOWER_BOUND ||
      number > LOTTO_NUMBERS.UPPER_BOUND
    ) {
      throw new CustomError(ERROR.INVALID_NUMBER_RANGE);
    }
  });
}

export function validateLottoNumbers(numbers) {
  validateLength(numbers);
  validateNoDuplicates(numbers);
  validateRange(numbers);
}

export function validateBonusNumber(numbers, bonusNumber) {
  if (numbers.includes(bonusNumber))
    throw new CustomError(ERROR.DUPLICATE_BONUS_NUMBER);
}
