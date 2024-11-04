import Validator from './Validator.js';

class ValidatorModule {
  static checkPositiveInteger(value) {
    Validator.isNumber(value);
    Validator.isNotZero(value);
    Validator.isPositive(value);
    Validator.isInteger(value);
  }

  static checkPurchaseCash(value) {
    Validator.isNotEmptyString(value);
    this.checkPositiveInteger(value);
    Validator.isNumberIsDividable(value);
  }

  static checkLottoNumbers(value) {
    Validator.isRigthArrayLength(value);
    Validator.isNotIncludeDuplicatedNumber(value);

    value.forEach((number) => {
      this.checkPositiveInteger(number);
      Validator.isNumberInBoundary(number);
    });
  }

  static checkBonusNumber(winnerNumbers, value) {
    this.checkPositiveInteger(value);
    Validator.isNumberInBoundary(value);
    Validator.isNotIncludeList(value, winnerNumbers);
  }
}

export default ValidatorModule;
