import { ERROR_MESSAGES } from "./constants/constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
