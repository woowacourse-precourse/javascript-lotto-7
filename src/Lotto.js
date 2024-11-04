import { ERROR_MESSAGES } from "./constants/error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static validateBonusNumber(bonus, numbers) {
    if (isNaN(bonus) || bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    if (numbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
  }
}

export default Lotto;
