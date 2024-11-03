import validator from '../Validators/Validator.js';
import { DEFAULT_RULES } from '../Validators/Rules.js';

class InputParser {
  static #SEPARATOR = ',';

  static #default(input) {
    const trimInput = input.trim();
    validator(trimInput, DEFAULT_RULES);
    return trimInput;
  }

  // input을 ,로 split하고 중복값 발생시 오류 방지를 위해 값들을 trim() 해줌 (ex: '  1' !== ' 1  ')
  static #splitter(inputs) {
    const splitInput = inputs
      .split(this.#SEPARATOR)
      .map((input) => this.number(input));
    return splitInput;
  }

  static number(input) {
    const trimInput = this.#default(input);
    const number = Number(trimInput);
    return number;
  }

  static numbers(inputs) {
    const trimInputs = this.#default(inputs);
    const numbers = this.#splitter(trimInputs);
    return numbers;
  }
}

export default InputParser;
