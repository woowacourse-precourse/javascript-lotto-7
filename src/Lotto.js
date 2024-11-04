import { Console } from '@woowacourse/mission-utils';
import { ERROR_TEXTS } from './Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_TEXTS.OUT_OF_COUNT_LOTTO_NUMBER);
    }

    const checkDuplicationArr = new Set(numbers);
    if(checkDuplicationArr.size !== numbers.length) {
      throw new Error(ERROR_TEXTS.NOT_A_DUPLICATION_LOTTO_NUMBER);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    Console.print('[' + this.#numbers.join(', ') + ']');
  }
}

export default Lotto;
