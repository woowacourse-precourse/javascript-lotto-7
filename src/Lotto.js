import { LOTTO } from './constant';
import getRandomSortedNumbers from './util/getRandomSortedNumbers';
class Lotto {
  #numbers;

  constructor() {
    this.#numbers = getRandomSortedNumbers(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.COUNT,
    );
  }

  matchNumbers(winningNumbers, bonusNumber) {
    const winningCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;
    const bonusFlag = this.#numbers.includes(bonusNumber);
  }

  static purchaseLotto(count) {
    return Array.from({ length: count }, () => new Lotto());
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
