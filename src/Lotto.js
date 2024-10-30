import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTERY } from './constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validateNumbersSize(numbers);
    Lotto.#validateNumberDuplication(numbers);
    this.#numbers = numbers;
  }

  static #validateNumbersSize(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTERY_NUMBER_SIZE);
    }
  }

  static #validateNumberDuplication(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_LOTTERY_NUMBER);
    }
  }

  static getRandomUniqueLotteryNumbers() {
    const {
      MIN_NUMBER,
      MAX_NUMBER,
      WINNING_NUMBER_SIZE,
    } = LOTTERY;
    return Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, WINNING_NUMBER_SIZE)
      .sort((a, b) => a - b);
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
