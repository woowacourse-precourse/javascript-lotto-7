import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.validateWinningNumber();
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.WRONG_LENGTH);
    }

    numbers.forEach(number => {
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGE.WINNING_NUMBER.IS_NOT_NUMBER);
      }
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.WINNING_NUMBER.WRONG_RANGE);
      }
    });

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length && numbers.length === 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.DUPLICATE);
    }
  }

  validateWinningNumber() {
    return this.#validate(this.#numbers);
  }
}

export default Lotto;
