import Validator from './Valldator';

class ValidatorModule {
  static checkPositiveInteger(value) {
    Validator.isNumber(value);
    Validator.isNotZero(value);
    Validator.isPositive(value);
    Validator.isInteger(value);
  }
}

export default ValidatorModule;
