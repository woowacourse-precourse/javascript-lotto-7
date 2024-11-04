import { ERROR_MESSAGES } from "../constants/constants.js";

class Validator {
  static isNumber(value, errorMessage = ERROR_MESSAGES.INVALID_AMOUNT) {
    this.checkCondition(!isNaN(value), errorMessage);
  }

  static isAboveMinimum(value, minimum = 1000) {
    this.checkCondition(
      Number(value) >= minimum,
      ERROR_MESSAGES.MINIMUM_AMOUNT
    );
  }

  static isThousandUnit(value) {
    this.checkCondition(
      Number(value) % 1000 === 0,
      ERROR_MESSAGES.INVALID_AMOUNT_UNIT
    );
  }

  static isWithinRange(value, min = 1, max = 45) {
    this.checkCondition(
      value >= min && value <= max,
      ERROR_MESSAGES.BONUS_NUMBER_RANGE
    );
  }

  static isUniqueBonusNumber(bonusNumber, winningNumbers) {
    const bonus = Number(bonusNumber);
    this.checkCondition(
      !winningNumbers.map(Number).includes(bonus),
      ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE
    );
  }

  static isSingleNumber(value) {
    this.checkCondition(
      value.split(",").length === 1,
      ERROR_MESSAGES.BONUS_NUMBER_COUNT
    );
  }

  static checkCondition(condition, errorMessage) {
    if (!condition) {
      throw new Error(errorMessage);
    }
  }
}

export default Validator;
