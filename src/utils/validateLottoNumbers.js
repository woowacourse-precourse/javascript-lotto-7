import LOTTO_NUMBERS from '../constants/config.js';
import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

function validateNotEmpty(value) {
  if (value === undefined || value === null || value.length === 0) {
    throw new CustomError(ERROR.EMPTY_INPUT);
  }
}

function validateInteger(value) {
  if (!Number.isInteger(value)) {
    throw new CustomError(ERROR.INVALID_DECIMAL);
  }
}

function validatePositive(value) {
  if (value < 0) {
    throw new CustomError(ERROR.INVALID_NEGATIVE_NUMBER);
  }
}

function validateNumberType(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new CustomError(ERROR.INVALID_NUMBER_TYPE);
  }
}

function validateInRange(
  value,
  lower = LOTTO_NUMBERS.LOWER_BOUND,
  upper = LOTTO_NUMBERS.UPPER_BOUND,
) {
  if (value < lower || value > upper) {
    throw new CustomError(ERROR.INVALID_NUMBER_RANGE);
  }
}

function validateLottoNumberLength(numbers) {
  if (numbers.length !== LOTTO_NUMBERS.NUMBER_LENGTH) {
    throw new CustomError(ERROR.INVALID_LOTTO_NUMBER_COUNT);
  }
}

function validateNoDuplicates(numbers) {
  if (new Set(numbers).size !== numbers.length) {
    throw new CustomError(ERROR.DUPLICATE_LOTTO_NUMBER);
  }
}

export function validateLottoNumbers(numbers) {
  validateNotEmpty(numbers);
  validateLottoNumberLength(numbers);
  numbers.forEach((number) => {
    validateNumberType(number);
    validateInteger(number);
    validatePositive(number);
    validateInRange(number);
  });
  validateNoDuplicates(numbers);
}

export function validateBonusNumber(winningNumbers, bonusNumber) {
  validateNotEmpty(bonusNumber);
  validateNumberType(bonusNumber);
  validateInteger(bonusNumber);
  validatePositive(bonusNumber);
  validateInRange(bonusNumber);

  if (winningNumbers.includes(bonusNumber)) {
    throw new CustomError(ERROR.DUPLICATE_BONUS_NUMBER);
  }
}
