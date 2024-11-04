import { LOTTO_ERROR_MESSAGE } from '../constants/error.js';
import { GAME_RULES } from '../constants/gameRule.js';
import { throwError } from '../utils/console.js';

const validate = {
  validateLength(numbers) {
    if (numbers.length !== GAME_RULES.LOTTO_NUMBER_COUNT) {
      throwError(LOTTO_ERROR_MESSAGE.INVALID_LENGTH);
    }
  },

  validateDuplicateNumber(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throwError(LOTTO_ERROR_MESSAGE.DUPLICATE_NUMBERS);
    }
  },

  validateRange(numbers) {
    if (numbers.some((num) => num < GAME_RULES.MIN_LOTTO_NUMBER || num > GAME_RULES.MAX_LOTTO_NUMBER)) {
      throwError(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },

  validatePositiveInteger(numbers) {
    if (numbers.some((num) => !Number.isInteger(num) || num <= 0)) {
      throwError(LOTTO_ERROR_MESSAGE.INVALID_POSITIVE_INTEGER);
    }
  },

  validateSorted(numbers) {
    const isSorted = numbers.every((num, idx) => idx === 0 || numbers[idx - 1] <= num);
    if (!isSorted) {
      throwError(LOTTO_ERROR_MESSAGE.NOT_SORTED);
    }
  },
};

function validateLottoNumbers(numbers) {
  validate.validateLength(numbers);
  validate.validateDuplicateNumber(numbers);
  validate.validateRange(numbers);
  validate.validatePositiveInteger(numbers);
  validate.validateSorted(numbers);
}

export default validateLottoNumbers;
