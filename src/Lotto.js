import { Console } from '@woowacourse/mission-utils';

import { ERROR_MESSAGE, LOTTO } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  show() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  match(winningNumbers, bonus) {
    return {
      matchingCount: this.#numbers.filter((number) =>
        winningNumbers.includes(number)
      ).length,
      hasBonus: this.#numbers.includes(bonus),
    };
  }

  #validate(numbers) {
    const invalidLength = numbers.length !== LOTTO.numberCount;
    if (invalidLength) {
      throw new Error(ERROR_MESSAGE.lotto.number);
    }

    const isInvalidRange = numbers.some(LOTTO.isInvalidRange);
    if (isInvalidRange) {
      throw new Error(ERROR_MESSAGE.lotto.range);
    }

    const set = new Set(numbers);
    const hasDuplicateNumber = set.size < LOTTO.numberCount;
    if (hasDuplicateNumber) {
      throw new Error(ERROR_MESSAGE.lotto.duplicate);
    }
  }
}

export default Lotto;
