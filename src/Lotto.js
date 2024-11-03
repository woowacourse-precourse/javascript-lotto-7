import { ERROR_MESSAGE } from './constant/error.js';
import { RULE } from './constant/rule.js';
import { createErrorMessage } from './util/error.js';
import { isInRange, isInteger, isNumber } from './util/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== RULE.LOTTO.LOTTO_SIZE) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidNumberSize));
    }

    numbers.forEach((number) => {
      this.#validateSingleNumber(number);
    });
  }

  #validateSingleNumber(number) {
    if (!isNumber(number)) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidNumberType));
    }

    if (!isInteger(number)) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidIntegerType));
    }

    if (!isInRange(number, RULE.LOTTO.NUMBER_MIN, RULE.LOTTO.NUMBER_MAX)) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidNumberInRange));
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
