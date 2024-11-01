import { ERROR_MESSAGE } from './Constants.js';

class Validation {
  static isNumber(input) {
    if (Number.isNaN(input) || input === null) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  }
}

export default Validation;
