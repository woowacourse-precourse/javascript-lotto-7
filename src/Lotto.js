import { Random } from "@woowacourse/mission-utils";
import {ERROR_MESSAGES} from "./const.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return new Lotto(numbers);
  }
}

export default Lotto;
