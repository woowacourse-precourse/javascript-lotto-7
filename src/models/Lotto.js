import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constants/errorMessage.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generate() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.NUMBER_MIN,
      LOTTO_CONFIG.NUMBER_MAX,
      LOTTO_CONFIG.NUMBER_COUNT
    ).sort((a, b) => a - b);

    return new Lotto(numbers);
  }

  static generateMultiple(lottoCount) {
    return Array.from({ length: lottoCount }, () => Lotto.generate());
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONFIG.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_COUNT);
    }

    numbers.forEach((number) => {
      if (
        number < LOTTO_CONFIG.NUMBER_MIN ||
        number > LOTTO_CONFIG.NUMBER_MAX
      ) {
        throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  calculateRank(winningLotto, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningLotto.numbers.includes(number)
    ).length;
    const hasBonus = this.#numbers.includes(bonusNumber);

    if (matchCount === 6) return 'first';
    if (matchCount === 5 && hasBonus) return 'second';
    if (matchCount === 5) return 'third';
    if (matchCount === 4) return 'fourth';
    if (matchCount === 3) return 'fifth';
  }
}

export default Lotto;
