import { ERROR, LOTTO } from "./util/constant.js";
import Validate from "./ValidateInput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validate.validateNumbersArray(numbers);
  }

  // TODO: 추가 기능 구현
  // ascending order of the lotto numbers
  getNumbers() {
    return this.#sortNumbers(this.#numbers);
  };

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
