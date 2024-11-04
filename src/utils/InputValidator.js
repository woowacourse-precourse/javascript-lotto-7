import ERROR_MESSAGES from '../constants/errorMessages.js';
import { LOTTO_VALUES } from '../constants/values.js';

class InputValidator {
  static validatePurchaseAmount(amount) {
    this.checkIfNumeric(amount);
    this.checkMinimumAmount(amount);
    this.checkMaximumAmount(amount);
    this.checkAmountUnit(amount);
  }

  static checkIfNumeric(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT);
    }
  }

  static checkMinimumAmount(amount) {
    if (amount < 1000) {
      throw new Error(ERROR_MESSAGES.MINIMUM_AMOUNT);
    }
  }

  static checkMaximumAmount(amount) {
    if (amount > Number.MAX_SAFE_INTEGER) {
      throw new Error(ERROR_MESSAGES.MAXIMUM_AMOUNT);
    }
  }

  static checkAmountUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    }
  }

  static validateWinningNumbers(numbers) {
    this.checkWinningNumbersLength(numbers);
    this.checkDuplicateWinningNumbers(numbers);
    this.checkWinningNumberRange(numbers);
  }

  static checkWinningNumbersLength(numbers) {
    if (numbers.length !== LOTTO_VALUES.LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_LENGTH);
    }
  }

  static checkDuplicateWinningNumbers(numbers) {
    if (new Set(numbers).size !== LOTTO_VALUES.LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
    }
  }

  static checkWinningNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < LOTTO_VALUES.MIN_RANDOM_VALUE ||
        number > LOTTO_VALUES.MAX_RANDOM_VALUE
      ) {
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);
      }
    });
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.checkIfBonusNumberIsNumeric(bonusNumber);
    this.checkBonusNumberRange(bonusNumber);
    this.checkDuplicateBonusNumber(bonusNumber, winningNumbers);
  }

  static checkIfBonusNumberIsNumeric(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
  }

  static checkBonusNumberRange(bonusNumber) {
    if (
      !Number.isInteger(bonusNumber) ||
      bonusNumber < LOTTO_VALUES.MIN_RANDOM_VALUE ||
      bonusNumber > LOTTO_VALUES.MAX_RANDOM_VALUE
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  static checkDuplicateBonusNumber(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default InputValidator;
