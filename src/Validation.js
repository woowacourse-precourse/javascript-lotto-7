import {
  ERROR_MESSAGE,
  VALIDATION,
  GLOBAL_CONSTANTS,
} from './utils/Constants.js';

class Validation {
  static validatePayment(payment) {
    this.isNumber(payment);
    this.isPositiveNumber(payment);
    this.hasMeetUnitAmount(payment);
  }

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

  static hasMeetUnitAmount(number) {
    if (number % GLOBAL_CONSTANTS.unitPrice !== 0) {
      throw new Error(ERROR_MESSAGE.notPositiveNumber);
    }
  }
}

export default Validation;
