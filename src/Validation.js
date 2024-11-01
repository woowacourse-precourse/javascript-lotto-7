import { ERROR_MESSAGE, VALIDATION } from './Constants.js';

class Validation {
  static isNumber(input) {
    if (Number.isNaN(input) || input === null) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  }

  static isPositiveNumber(number) {
    if (number <= VALIDATION.mustOverage) {
      throw new Error(ERROR_MESSAGE.notPositiveNumber);
    }
  }
}

export default Validation;
