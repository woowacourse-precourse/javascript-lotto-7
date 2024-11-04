import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

export class BonusNumberValidator {
  constructor(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  isValidEmptyInput() {
    return this.bonusNumber !== '';
  }

  isValidNumberBonusNumber() {
    const bonusNumber = Number(this.bonusNumber);

    return !Number.isNaN(bonusNumber);
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
