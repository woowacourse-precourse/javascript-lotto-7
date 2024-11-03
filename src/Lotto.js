import { ERROR_MESSAGE } from './constant/error.js';
import { isInRange, isInteger, isNumber } from './util/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    numbers.forEach((number) => {
      this.#validateSingleNumber(number);
    });
  }

  #validateSingleNumber(number) {
    if (!isNumber(number)) {
      throw new Error(ERROR_MESSAGE.invalidNumberType);
    }

    if (!isInteger(number)) {
      throw new Error(ERROR_MESSAGE.invalidIntegerType);
    }

    if (!isInRange(number, 1, 45)) {
      throw new Error(ERROR_MESSAGE.invalidNumberInRange);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
