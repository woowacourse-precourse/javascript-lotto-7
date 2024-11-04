import { checkNumber, checkNumberRange } from '../utils/validation.js';
import { ERROR_MESSAGES } from '../constant/constants.js';
import { createError } from '../utils/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#checkNumbers(numbers);

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    this.#checkNumbersRange(numbers);
    this.#hasDuplicateNumbers(numbers);
  }

  #checkNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      checkNumber(numbers[i], ERROR_MESSAGES.LOTTO.NOT_A_NUMBER);
    }
  }

  #checkNumbersRange = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      checkNumberRange(numbers[i], ERROR_MESSAGES.LOTTO.OUT_OF_RANGE);
    }
  };

  #hasDuplicateNumbers = (numbers) => {
    const uniqueValues = new Set(numbers);
    const uniqueNumbers = [...uniqueValues];

    if (numbers.length !== uniqueNumbers.length) {
      createError(ERROR_MESSAGES.LOTTO.DUPLICATION_NUMBER);
    }
  };

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
