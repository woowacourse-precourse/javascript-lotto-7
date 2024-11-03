import { WINNING_NUMBERS_ERROR_MESSAGE } from '../constants/message.js';
import { throwError } from '../utils/console.js';

const validate = {
  validateEmpty(input) {
    if (input.trim() === '') {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.EMPTY_INPUT);
    }
  },

  validateDelimiter(input) {
    if (!input.includes(',')) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.DELIMITER_REQUIRED);
    }

    const invalidDelimiter = /[^0-9,]/.test(input);
    if (invalidDelimiter) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.INVALID_DELIMITER);
    }
  },

  validatePositiveInteger(numbers) {
    if (numbers.some(num => !Number.isInteger(num) || num <= 0)) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.INVALID_POSITIVE_INTEGER);
    }
  },

  validateRange(numbers) {
    if (numbers.some(num => num < 1 || num > 45)) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },

  validateDuplicateNumber(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.DUPLICATE_NUMBERS);
    }
  },

  validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  },

};

function validateWinningNumber(input) {
  validate.validateEmpty(input);
  validate.validateDelimiter(input);

  const numbers = input.split(',').map(num => Number(num.trim()));

  validate.validateDuplicateNumber(numbers);
  validate.validateNumberCount(numbers);
  validate.validateRange(numbers);
  validate.validatePositiveInteger(numbers);
}

export default validateWinningNumber;
