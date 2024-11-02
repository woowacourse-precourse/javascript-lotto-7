import { Console } from '@woowacourse/mission-utils';

import { ERROR_MESSAGE, LOTTO } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  show() {
    Console.print(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.numberCount) {
      throw new Error(ERROR_MESSAGE.lotto.number);
    }
  }
}

export default Lotto;
