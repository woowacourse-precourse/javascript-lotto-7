import { ERROR } from "./util/constant.js";

class ValidateInput {
  #input;
  #numbers;

  constructor(input) {
    this.#validate(input);
    this.#input = input;
    this.#numbers = this.#splitNumbers();
  }

  #validate(input) {
    if (typeof input !== 'string') {
      throw new Error(ERROR.INVALID_LOTTO_NUMBERS_INPUT)
    }
  }

  #splitNumbers() {
    return this.#input.split(',');
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default ValidateInput;