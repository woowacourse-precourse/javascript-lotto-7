import { ERROR_MESSAGES } from '../constants/messages.js';

class Validator {
  static checkIsNull(userInput) {
    if (!userInput || !userInput.trim()) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static checkRegexPattern(userInput, regex, errorMessage) {
    if (!regex.test(userInput)) {
      throw new Error(`${errorMessage}`);
    }
  }

  static checkValidRange(userInput, startNum, endNum, errorMessage) {
    if (userInput < startNum || userInput > endNum) {
      throw new Error(`${errorMessage}`);
    }
  }
}

export default Validator;
