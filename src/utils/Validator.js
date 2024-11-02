import { ERROR_MESSAGES } from "../constants/constants.js";

class Validator {
  static isNumber(value, errorMessage = ERROR_MESSAGES.INVALID_AMOUNT) {
    if (isNaN(value)) {
      throw new Error(errorMessage);
    }
    return true;
  }

  static isAboveMinimum(value, minimum = 1000) {
    if (Number(value) < minimum) {
      throw new Error(ERROR_MESSAGES.MINIMUM_AMOUNT);
    }
    return true;
  }

  static isThousandUnit(value) {
    if (Number(value) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    }
    return true;
  }

  static isWithinRange(value, min = 1, max = 45) {
    if (value < min || value > max) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }
    return true;
  }

  static isUniqueBonusNumber(bonusNumber, winningNumbers) {
    const bonus = Number(bonusNumber);
    if (winningNumbers.map(Number).includes(bonus)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
    return true;
  }

  static isSingleNumber(value) {
    if (value.split(",").length !== 1) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_COUNT);
    }
    return true;
  }
}

export default Validator;
