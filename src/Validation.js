import {
  ERROR_MESSAGE,
  VALIDATION,
  GLOBAL_CONSTANTS,
} from './utils/Constants.js';

class Validation {
  static checkPayment(payment) {
    this.isNumber(payment);
    this.isPositiveNumber(payment);
    this.hasMeetUnitAmount(payment);
  }

  static checkWinningNumbers(numbers) {
    numbers.forEach((number) => {
      this.isNumber(number);
      this.isInRange(number);
      this.isInteger(number);
    });

    this.isValidNumberCount(numbers);
    this.isNotDuplicated(numbers);
  }

  static checkBonusNumber(bonusNumber, winningNumbers) {
    this.isNumber(bonusNumber);
    this.isInRange(bonusNumber);
    this.isInteger(bonusNumber);
    this.isNotDuplicated([...winningNumbers, bonusNumber]);
  }

  static checkLottoNumber(numbers) {
    numbers.forEach((number) => {
      this.isNumber(number);
      this.isInRange(number);
      this.isInteger(number);
    });

    this.isValidNumberCount(numbers);
    this.isNotDuplicated(numbers);
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
      throw new Error(ERROR_MESSAGE.notUnitPrice);
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

  static isValidNumberCount(numbers) {
    if (numbers.length !== VALIDATION.drawNumbers) {
      throw new Error(ERROR_MESSAGE.notValidNumberCount);
    }
  }
}

export default Validation;
