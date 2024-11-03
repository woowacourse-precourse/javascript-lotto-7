import ERROR_MESSAGE from './constant/error.js';
import LOTTO_RULE from './constant/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_RULE.LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.WRONG_LENGTH);
    }
    if (new Set(numbers).size !== LOTTO_RULE.LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
