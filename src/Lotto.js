import { ERROR_MESSAGES } from './datas/error.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_COUNT);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBERS);
    }
  }

  static generateLottoNumbers(count) {
    const results = [];
    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      results.push(numbers.sort((a, b) => a - b));
    }
    return results;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
