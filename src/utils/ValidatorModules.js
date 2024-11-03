import Validator from './Valldator';

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
}

export default ValidatorModule;
