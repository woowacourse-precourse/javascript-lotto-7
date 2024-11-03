import { ERROR_MESSAGES } from "./ErrorMessages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.not_6_nums);
    }
    for (let i = 0; i < 6; i++) {
      if (isNaN(numbers[i])) {
        throw new Error(ERROR_MESSAGES.not_number);
      }
      if (numbers[i] > 45 || numbers[i] < 1) {
        throw new Error(ERROR_MESSAGES.not_1to45);
      }
    }
    const lottoSet = new Set(numbers);
    if (lottoSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.duplicate_num);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
