import { ERROR_MESSAGE } from '../constants/message.js';
import { throwError } from '../utils/console.js';

const validate = {
  validateLength(numbers) {
    if (numbers.length !== 6) {
      throwError(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
  },

  validateDuplicateNumber(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throwError(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBERS);
    }
  },

  validateRange(numbers) {
    if (numbers.some((num) => num < 1 || num > 45)) {
      throwError(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },

  validatePositiveInteger(numbers) {
    if (numbers.some((num) => !Number.isInteger(num) || num <= 0)) {
      throwError(ERROR_MESSAGE.LOTTO_INVALID_POSITIVE_INTEGER);
    }
  },

  validateSorted(numbers) {
    const isSorted = numbers.every((num, idx) => idx === 0 || numbers[idx - 1] <= num);
    if (!isSorted) {
      throwError(ERROR_MESSAGE.NOT_SORTED);
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
