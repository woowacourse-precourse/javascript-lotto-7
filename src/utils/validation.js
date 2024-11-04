import { ERROR_PREFIX, ERROR_MESSAGES } from '../constant/constant.js';

export const throwValidationError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};

export const checkIsEmpty = (input) => {
  if (!input) {
    throwValidationError(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

export const checkIsNumber = (input) => {
  if (Number.isNaN(input) || !Number.isInteger(input)) {
    throwValidationError(ERROR_MESSAGES.NOT_A_NUMBER);
  }
};

export const checkLength = (numbers) => {
  if (numbers.length !== LOTTO.LENGTH) {
    throwValidationError(ERROR_MESSAGES.INVALID_LENGTH);
  }
};

export const checkDuplicate = (numbers) => {
  const uniqueNumbers = new Set(numbers);

  if (uniqueNumbers.size !== numbers.length) {
    throwValidationError(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }
};
