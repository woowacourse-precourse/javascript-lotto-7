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

  isValidateBonusNumberRange(bonusNumber) {
    return bonusNumber > 0 && bonusNumber < 46;
  }

  validateBonusNumber(bonusNumber) {
    if (!this.isValidEmptyInput(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_BONUS_NUMBER);
    }

    if (!this.isValidNumberBonusNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
    }

    if (!this.isValidateBonusNumberRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NUMBER_RANGE);
    }

    return true;
  }
}

export { BonusNumberValidator };
