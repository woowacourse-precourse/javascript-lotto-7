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
    if (Number.isNaN(input)) {
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

  static isInRange(number) {
    if (
      number < GLOBAL_CONSTANTS.minimumNumber ||
      number > GLOBAL_CONSTANTS.maximumNumber
    ) {
      throw new Error(ERROR_MESSAGE.notInRangeNumber);
    }
  }

  static isInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.notInteger);
    }
  }

  static isNotDuplicated(numbers) {
    const numberSet = new Set([...numbers]);
    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.isDuplicated);
    }
  }
}

export default Validation;
