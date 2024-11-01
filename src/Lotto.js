import ERROR_MESSAGES from './Error/Error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNotEmpty(numbers);
    this.#validateLength(numbers);
    this.#validateType(numbers);
    this.#validateRange(numbers);
    this.#validateNumber(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);
    }
  }

  #validateNumber(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    }
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(
          ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
        );
      }
    });
  }

  #validateType(numbers) {
    numbers.forEach((number) => {
      if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);
      }
    });
  }

  #validateNotEmpty(numbers) {
    if (!numbers || numbers.length === 0) {
      throw new Error(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
