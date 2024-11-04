import { ERROR_MESSAGES } from '../constants/messages.js';
import { LOTTO_VALUES } from '../constants/lottoConstants.js';
import REGEX from '../constants/regex.js';

class Validator {
  static #checkIsNull(userInput) {
    if (!userInput || !userInput.trim()) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static #checkRegexPattern(userInput, regex, errorMessage) {
    if (!regex.test(userInput)) {
      throw new Error(`${errorMessage}`);
    }
  }

  static checkValidRange(userInput, startNum, endNum, errorMessage) {
    if (userInput < startNum || userInput > endNum) {
      throw new Error(`${errorMessage}`);
    }
  }

  static validateAmount(amount) {
    Validator.#checkIsNull(amount);
    Validator.#checkRegexPattern(amount, REGEX.NUMBER_REGEX, ERROR_MESSAGES.INVALID_AMOUNT_INPUT);
    Validator.checkValidRange(
      amount,
      LOTTO_VALUES.MIN_AMOUNT,
      LOTTO_VALUES.MAX_AMOUNT,
      ERROR_MESSAGES.INVALID_AMOUNT_RANGE,
    );
    this.#checkThousandUnit(amount);
  }

  static #checkThousandUnit(amount) {
    if (amount % LOTTO_VALUES.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    }
  }

  static validateInput(value, regex, errorMessage) {
    this.#checkIsNull(value);
    this.#checkRegexPattern(value, regex, errorMessage);
  }
}

export default Validator;
