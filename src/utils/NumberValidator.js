import { ERROR_MESSAGES } from '../constants/constants.js';

class NumberValidator {
  static validateIsEmpty(value) {
    if (!value) {
      throw new Error(ERROR_MESSAGES.IS_EMPTY);
    }
  }

  static validateIsOnlyDigits(value) {
    if (!/^\d+$/.test(value)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }
  }
}

export default NumberValidator;
