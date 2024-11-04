import { COMMON_ERROR_MESSAGES } from './constants/ERROR_MESSAGES';
import { hasWhitespace } from './utils/hasWhitespace';
import { isEmptyString } from './utils/isEmptyString';
import { isNaturalNumber } from './utils/isNaturalNumber';

class Validator {
  static validateWhitespace(input) {
    if (hasWhitespace(input)) {
      throw new Error(COMMON_ERROR_MESSAGES.WHITESPACE_NOT_ALLOWED);
    }
  }

  static validateNaturalNumber(input) {
    if (!isNaturalNumber(input)) {
      throw new Error(COMMON_ERROR_MESSAGES.NOT_A_NATURAL_NUMBER);
    }
  }

  static validateEmpty(input) {
    if (isEmptyString(input)) {
      throw new Error(COMMON_ERROR_MESSAGES.EMPTY_STRING);
    }
  }
}

export default Validator;
