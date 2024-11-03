import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    this.#checkArrayType(numbers);
    this.#checkBlank(numbers);
    this.#checkLottoCount(numbers);
    this.#checkNumberDuplication(numbers);

    numbers.forEach((number) => {
      this.#checkNumberRange(number);
      this.#checkPositiveInteger(number);
    });
  }

  #checkLottoCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_LOTTO_NUMBER_COUNT);
    }
  }

  #checkNumberDuplication(numbers) {
    const lottoSet = new Set();

    numbers.forEach((number) => {
      if (lottoSet.has(number)) {
        throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATION);
      }
      lottoSet.add(number);
    });
  }

  #checkNumberRange(number) {
    if (
      !(number >= LOTTO_CONFIG.MIN_NUMBER && number <= LOTTO_CONFIG.MAX_NUMBER)
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_NUMBER_RANGE);
    }
  }

  #checkPositiveInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_POSITIVE_NUMBER);
    }
  }

  #checkBlank(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (!(i in numbers)) {
        throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_IS_BLANK);
      }
    }
  }

  #checkArrayType(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_ARRAY_TYPE);
    }
  }
}
