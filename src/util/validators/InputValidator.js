import { ErrorMessage } from '../../constants/ErrorMessage.js';

class InputValidator {
  static validateNotEmpty(value) {
    if (value === '' || value === undefined || value === null) {
      throw new Error(ErrorMessage.EMPTY_INPUT);
    }
  }

  static validateIsNumber(value) {
    if (Number.isNaN(value) || !/^-?\d+$/.test(value)) {
      throw new Error(ErrorMessage.NOT_A_NUMBER);
    }
  }

  static validatePositive(value) {
    if (Number(value) === 0) {
      throw new Error(ErrorMessage.ZERO_PRICE);
    }
    if (Number(value) < 0) {
      throw new Error(ErrorMessage.NEGATIVE_NUM);
    }
  }
}

export default InputValidator;
