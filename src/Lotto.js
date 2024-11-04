import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './lib/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.LOTTO_NUMBER_COUNT}`);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(`${ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE}`);
    }
  }

  // TODO: 추가 기능 구현
  showLottoNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
