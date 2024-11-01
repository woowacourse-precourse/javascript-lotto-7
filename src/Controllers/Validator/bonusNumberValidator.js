import { ERROR_MESSAGE } from '../../Constants/errorMessages.js';

class BonusNumberValidator {
  constructor(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  isBonusNumberEmptyInput() {
    return this.bonusNumber !== '';
  }

  isValidateNumberBonusNumber() {
    const regex = /\d/i;
    return regex.test(this.bonusNumber);
  }

  validateBonusNumber() {
    if (!this.isBonusNumberEmptyInput(this.bonusNumber)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_BONUS_NUMBER);
    }

    if (!this.isValidateNumberBonusNumber(this.bonusNumber)) {
      throw new Error(ERROR_MESSAGE.ONE_DIGIT_NUMBER);
    }
  }
}

export { BonusNumberValidator };

// const isBonusNumberEmptyInput = (BonusNumber) => BonusNumber !== '';

// // TODO: 리펙토링. 오류 단위 더 디테일하게 변경
// const isValidateNumberBonusNumber = (BonusNumber) => {
//   const regex = /\d/i;
//   return regex.test(BonusNumber);
// };

// const validateBonusNumber = (BonusNumber) => {
//   if (!isBonusNumberEmptyInput(BonusNumber)) {
//     throw new Error(ERROR_MESSAGE.EMPTY_INPUT_BONUS_NUMBER);
//   }

//   if (!isValidateNumberBonusNumber(BonusNumber)) {
//     throw new Error(ERROR_MESSAGE.ONE_DIGIT_NUMBER);
//   }
