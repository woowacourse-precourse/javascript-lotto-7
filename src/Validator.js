import ERROR_MESSAGES from './constants/error.js';
import { handleError, isDivisible, isEmptyOrNull, isNegative } from './utils/index.js';

class Validator {
  static isEmpty(value) {
    handleError(isEmptyOrNull(value), ERROR_MESSAGES.PRICE_EMPTY);
  }

  static isNotDivisible(value) {
    handleError(!isDivisible(value), ERROR_MESSAGES.PRICE_NOT_DIVISIBLE);
  }

  static isNegativeNumber(value) {
    handleError(isNegative(value), ERROR_MESSAGES.PRICE_NOT_DIVISIBLE);
  }

  static price(price) {
    Validator.isEmpty(price);
    Validator.isNotDivisible(price);
    Validator.isNegativeNumber(price);
  }
}
export default Validator;
