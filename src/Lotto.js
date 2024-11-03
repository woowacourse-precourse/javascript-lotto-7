import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
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
    if (setNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.DUPLICATE);
    }
  }

  #validateAdditional(numbers) {
    if (isNaN(numbers)) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.IS_NOT_NUMBER);
    }
    if (numbers < 1 || numbers > 45) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.WRONG_RANGE);
    }
  }

  validateWinningNumber(numbers) {
    return this.#validate(numbers);
  }

  validateAdditionalNumber(additionalNumber) {
    return this.#validateAdditional(additionalNumber);
  }
}

export default Lotto;
