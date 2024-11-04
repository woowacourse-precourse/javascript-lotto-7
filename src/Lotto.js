import { Random } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers =
      numbers ||
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    this.#validate(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(CONSTANTS.ERROR_INSUFFICIENT_LENGTH);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(CONSTANTS.ERROR_DUPLICATE_NUMBERS);
    }

    const isInRange = numbers.every((num) => num >= 1 && num <= 45);
    if (!isInRange) {
      throw new Error(CONSTANTS.ERROR_INVALID_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
