import ERRORS from '../constants/errorMessages.js';
import ErrorHandler from './ErrorHandler.js';

class Validator {
  static isDivisibleBy1000(number) {
    return number % 1000 === 0;
  }

  static isPositiveNumber(number) {
    return number > 0;
  }

  static isNaN(value) {
    return Number.isNaN(Number(value));
  }

  static validatePaymentAmount(amount) {
    ErrorHandler.throwIf(Validator.isNaN(amount), ERRORS.NOT_A_NUMBER);
    ErrorHandler.throwIf(!Validator.isPositiveNumber(amount), ERRORS.NOT_POSITIVE_NUMBER);
    ErrorHandler.throwIf(!Validator.isDivisibleBy1000(amount), ERRORS.NOT_DIVISIBLE_BY_1000);
  }
}

export default Validator;
