import {
  COMMON_ERROR_MESSAGES,
  LOTTO_NUMBER_ERROR_MESSAGES
} from './constants/ERROR_MESSAGES.js';
import { LOTTO } from './constants/LOTTO_CONSTANTS.js';
import { hasWhitespace } from './utils/hasWhitespace.js';
import { isEmptyString } from './utils/isEmptyString.js';
import { isNaturalNumber } from './utils/isNaturalNumber.js';
import { stringToNumber } from './utils/stringToNumber.js';

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

  static validateLottoNumberRange(number) {
    if (
      number < LOTTO.NUMBER_MINIMUM_RANGE ||
      LOTTO.NUMBER_MAXIMUM_RANGE < number
    ) {
      throw new Error(LOTTO_NUMBER_ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
    }
  }

  static validateBonusNumber(input) {
    this.validateNaturalNumber(input);
    const bonusNumber = stringToNumber(input);
    this.validateLottoNumberRange(bonusNumber);
    return bonusNumber;
  }
}

export default Validator;
