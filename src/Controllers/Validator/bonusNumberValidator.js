import { ERROR_MESSAGES } from '../../Constants/errorMessages.js';

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
      throw new Error(ERROR_MESSAGES.bonusNumber.EMPTY_INPUT);
    }

    if (!this.isValidNumberBonusNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumber.NUMBER_TYPE);
    }

    if (!this.isValidateBonusNumberRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumber.NUMBER_RANGE);
    }

    return true;
  }
}

export { BonusNumberValidator };
