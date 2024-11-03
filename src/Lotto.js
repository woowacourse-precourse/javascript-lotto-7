import { ERROR_MESSAGE } from './constant/error.js';
import { RULE } from './constant/rule.js';
import { isInRange, isInteger, isNumber } from './util/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== RULE.LOTTO.LOTTO_SIZE) {
      throw new Error(
        `[ERROR] 로또 번호는 ${RULE.LOTTO.LOTTO_SIZE}개여야 합니다.`,
      );
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

    if (!isInRange(number, RULE.LOTTO.NUMBER_MIN, RULE.LOTTO.NUMBER_MAX)) {
      throw new Error(ERROR_MESSAGE.invalidNumberInRange);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
