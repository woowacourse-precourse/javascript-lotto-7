import { ERROR_MESSAGES } from './constants/constants.js';

const { INVALID_DUPLICATE_NUMBERS, INVALID_LOTTO_NUMBER_COUNT } =
  ERROR_MESSAGES;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(INVALID_LOTTO_NUMBER_COUNT);
    }

    this.#checkUniqueNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  #checkUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(INVALID_DUPLICATE_NUMBERS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
