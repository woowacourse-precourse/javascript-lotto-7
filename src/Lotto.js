import LottoGenerator from './Lotto_modules/LottoGenerator.js';
import { LOTTO_NUMBER_COUNT, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, ERROR_MESSAGES } from './constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers = LottoGenerator.generate()) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT || new Set(numbers).size !== LOTTO_NUMBER_COUNT || numbers.some(num => num < LOTTO_MIN_NUMBER || num > LOTTO_MAX_NUMBER)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
