import { ERROR_MSG, REGEXP } from '../Util/Constants.js';

export default class InputHandler {
  stringToInt(string) {
    this.#validateEmpty(string);
    this.#validateNumber(string);
    return parseInt(string, 10);
  }

  #validateNumber(string) {
    if (REGEXP.IS_NUMBER.test(string) === false) {
      throw Error(ERROR_MSG.notANumber);
    }
  }

  #validateEmpty(string) {
    if (!string || string.trim().length === 0) {
      throw Error(ERROR_MSG.invalidInputData);
    }
  }
}
