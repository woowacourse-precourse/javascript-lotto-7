import ERRORS from "./constants/Errors.js";
import CONDITIONS from "./constants/Conditions.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== CONDITIONS.LOTTO_NUMBER_DRAWN) {
      throw new Error(ERRORS.NOT_6_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
