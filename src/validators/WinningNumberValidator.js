import { WINNING_NUMBERS_ERROR_MESSAGE } from '../constants/error.js';
import { GAME_RULES } from '../constants/gameRule.js';
import { throwError } from '../utils/console.js';
import { splitByDelimiter } from '../utils/game.js';

const validate = {
  validateEmpty(input) {
    if (input.trim() === '') {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.EMPTY_INPUT);
    }
  },

  validateDelimiter(input) {
    if (!input.includes(GAME_RULES.DELIMITER)) {
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
    if (numbers.some(num => num < GAME_RULES.MIN_LOTTO_NUMBER || num > GAME_RULES.MAX_LOTTO_NUMBER)) {
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
    if (numbers.length !== GAME_RULES.LOTTO_NUMBER_COUNT) {
      throwError(WINNING_NUMBERS_ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  },

};

function validateWinningNumber(input) {
  validate.validateEmpty(input);
  validate.validateDelimiter(input);
  const numbers = splitByDelimiter(input);
  validate.validateDuplicateNumber(numbers);
  validate.validateNumberCount(numbers);
  validate.validateRange(numbers);
  validate.validatePositiveInteger(numbers);
}

export default validateWinningNumber;
