import { ERROR_MESSAGE } from './constants/ERROR_MESSAGES';
import { hasWhitespace } from './utils/hasWhitespace';
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
}

export default Validator;
