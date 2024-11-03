import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateIsEmpty(numbers);
    this.#validateNumberOnly(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberCount(numbers);
    this.#validateNumberDuplicates(numbers);
  }

  #validateIsEmpty(numbers) {
    const isEmpty = numbers.some((num) => num === 0);

    if (isEmpty) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  #validateNumberOnly(numbers) {
    const hasNonNumber = numbers.some((num) => isNaN(num));
    if (hasNonNumber) {
      throw new Error(ERROR_MESSAGE.WINNING_PURCHASE_INVALID);
    }
  }

  #validateNumberRange(numbers) {
    const isInRange = numbers.every((num) => {
      return num >= 1 && num <= 45;
    });
    if (!isInRange) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_FORMAT);
    }
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_COUNT);
    }
  }

  #validateNumberDuplicates(numbers) {
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE);
    }
  }
}

export default Lotto;
