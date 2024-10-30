import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
} from '../constants/constants.js';
import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generate() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      LOTTO_NUMBER_COUNT
    ).sort((a, b) => a - b);

    return new Lotto(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    numbers.forEach((number) => {
      if (number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX) {
        throw new Error(
          '[ERROR] 로또 번호 범위(1 ~ 45)를 벗어난 숫자가 있습니다.'
        );
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
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

    if (matchCount === 3) return 'fifth';
    if (matchCount === 4) return 'fourth';
    if (matchCount === 5) return 'third';
    if (matchCount === 5 && hasBonus) return 'second';
    if (matchCount === 6) return 'first';
  }
}

export default Lotto;
