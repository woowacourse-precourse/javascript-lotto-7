import { ERROR_MESSAGE } from './constants/ERROR_MESSAGES';
import { hasWhitespace } from './utils/hasWhitespace';
import { isEmptyString } from './utils/isEmptyString';
import { isNaturalNumber } from './utils/isNaturalNumber';

class Validator {
  static validateWhitespace(input) {
    if (hasWhitespace(input)) {
      throw new Error(ERROR_MESSAGE.WHITESPACE_NOT_ALLOWED);
    }
  }

  static validateNaturalNumber(input) {
    if (!isNaturalNumber(input)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NATURAL_NUMBER);
    }
  }

  static validateEmpty(input) {
    if (isEmptyString(input)) {
      throw new Error(ERROR_MESSAGE.EMPTY_STRING);
    }
  }
}

export default Validator;
