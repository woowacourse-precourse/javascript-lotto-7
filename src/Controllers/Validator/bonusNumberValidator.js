import { ERROR_MESSAGE } from '../../Constants/errorMessages.js';

class BonusNumberValidator {
  constructor(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  isValidEmptyInput(bonusNumber) {
    return bonusNumber !== '';
  }

  isValidNumberBonusNumber(bonusNumber) {
    return !isNaN(bonusNumber);
  }

  isValidateLengthBonusNumber(bonusNumber) {
    return bonusNumber.length === 1;
  }

  validateBonusNumber(bonusNumber) {
    if (!this.isValidEmptyInput(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_BONUS_NUMBER);
    }

    if (!this.isValidNumberBonusNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
    }

    if (!this.isValidateLengthBonusNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.ONE_DIGIT_NUMBER);
    }
    return true;
  }
}

export { BonusNumberValidator };
