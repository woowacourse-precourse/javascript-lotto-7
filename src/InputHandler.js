import { ERROR_MSG, REGEXP } from './Constants.js';

const DELIMETER = ',';

export default class InputHandler {
  splitStringToInt(string) {
    const splitedString = string.split(DELIMETER);
    const numbers = [];

    splitedString.forEach((element) => {
      numbers.push(this.stringToInt(element));
    });

    return numbers;
  }

  stringToInt(string) {
    this.#validateNumber(string);
    return parseInt(string, 10);
  }

  #validateNumber(string) {
    if (REGEXP.IS_NUMBER.test(string) === false) {
      throw Error(ERROR_MSG.notANumber);
    }
  }
}
