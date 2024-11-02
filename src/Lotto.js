import { ERROR_MESSAGES } from "./constants/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (typeof numbers === "string" && !numbers.includes(",")) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_FORMAT);
    }

    const processedNumbers = this.#processInput(numbers);
    this.#validate(processedNumbers);
    this.#numbers = processedNumbers;
  }

  #processInput(numbers) {
    if (typeof numbers === "string") {
      return numbers.split(",").map((num) => num.trim());
    }
    return numbers;
  }

  #validate(numbers) {
    if (!numbers.every((num) => !isNaN(num))) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_NAN);
    }

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_COUNT);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE);
    }

    const parsedNumbers = numbers.map((num) => Number(num));
    if (parsedNumbers.some((num) => num < 1 || num > 45)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
