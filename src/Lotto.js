import { LOTTO } from './constants/lotto.js';
import { ERROR_MESSAGE } from './constants/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validate.arrayCount(numbers, LOTTO.BASIC_COUNT))
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_COUNT_IS_NOT_BASIC_COUNT);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
