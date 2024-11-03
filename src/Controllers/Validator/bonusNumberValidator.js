import { ERROR_MESSAGES } from '../../Constants/errorMessages.js';

class BonusNumberValidator {
  constructor(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  isValidEmptyInput() {
    return this.bonusNumber !== '';
  }

  isValidNumberBonusNumber() {
    return !isNaN(this.bonusNumber);
  }

  isValidateBonusNumberRange() {
    return this.bonusNumber > 0 && this.bonusNumber < 46;
  }

  getValidationRules() {
    return [
      [!this.isValidEmptyInput(), ERROR_MESSAGES.bonusNumber.EMPTY_INPUT],
      [!this.isValidNumberBonusNumber(), ERROR_MESSAGES.bonusNumber.NUMBER_TYPE],
      [!this.isValidateBonusNumberRange(), ERROR_MESSAGES.bonusNumber.NUMBER_RANGE],
    ];
  }

  validateBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
    const validationRules = this.getValidationRules();

    validationRules.forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }
}

export { BonusNumberValidator };

// if (!this.isValidEmptyInput(bonusNumber)) {
//   throw new Error(ERROR_MESSAGES.bonusNumber.EMPTY_INPUT);
// }

// if (!this.isValidNumberBonusNumber(bonusNumber)) {
//   throw new Error(ERROR_MESSAGES.bonusNumber.NUMBER_TYPE);
// }

// if (!this.isValidateBonusNumberRange(bonusNumber)) {
//   throw new Error(ERROR_MESSAGES.bonusNumber.NUMBER_RANGE);
// }
