import { VALID_LOTTERY_NUM } from "./constants/utils.js";
import { ERROR_MSG } from "./constants/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== VALID_LOTTERY_NUM) {
      throw new Error(ERROR_MSG.invalidLottoNumber);
    }

    if (new Set(numbers).size !== VALID_LOTTERY_NUM) {
      throw new Error(ERROR_MSG.isDuplicatedNum);
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
