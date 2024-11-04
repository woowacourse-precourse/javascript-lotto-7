import { ERROR_PREFIX, ERROR_MESSAGES } from '../constant/constant.js';

export const throwValidationError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};

export const checkIsEmpty = (input) => {
  if (!input) {
    throwValidationError(ERROR_MESSAGES.EMPTY_INPUT);
  }
};
