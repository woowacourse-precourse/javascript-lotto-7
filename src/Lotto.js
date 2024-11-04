import { Console } from '@woowacourse/mission-utils';
import {
  LOTTO_ERROR_MESSAGE,
  NUMBER_OF_LOTTO_NUMBERS,
  MAX_NUMBER,
  MIN_NUMBER,
} from './constants/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (new Set(numbers).size !== NUMBER_OF_LOTTO_NUMBERS) {
      throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE_NUMBER_ERROR_MESSAGE);
    }
    if (numbers.some((number) => number < MIN_NUMBER || number > MAX_NUMBER)) {
      throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE_NUMBER_ERROR_MESSAGE);
    }
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
  sortLottoNumbers() {
    this.#numbers.sort(function (a, b) {
      return a - b;
    });
    return this.#numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
