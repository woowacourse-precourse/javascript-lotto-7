import { ERROR_MESSAGES } from '../constants/constants.js';

class NumberValidator {
  static validateIsEmpty(value) {
    if (!value) {
      throw new Error(ERROR_MESSAGES.IS_EMPTY);
    }
  }

  static validateIsNumber(value) {
    if (Number.isNaN(parseFloat(value))) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }
  }

  static validateNoDecimal(value) {
    if (value.toString().includes('.')) {
      throw new Error(ERROR_MESSAGES.INCLUDE_DECIMAL);
    }
  }

  static validateIsInteger(value) {
    if (!Number.isInteger(value)) {
      throw new Error(ERROR_MESSAGES.NOT_INTEGER);
    }
  }

  static validateIsPositive(value) {
    if (value <= 0) {
      throw new Error(ERROR_MESSAGES.NOT_POSITIVE);
    }
  }
}

export default NumberValidator;
