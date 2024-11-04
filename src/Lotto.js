import { LOTTO } from './constant';
import getRandomSortedNumbers from './util/getRandomSortedNumbers';
class Lotto {
  #numbers;
  static matchedCount = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };

  constructor() {
    this.#numbers = getRandomSortedNumbers(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.COUNT,
    );
  }

  matchNumbers(winningNumbers, bonusNumber) {
    const winningMatches = this.#numbers.filter((number) =>
      winningNumbers.includes(number),
    );
    const winningCount = String(winningMatches.length);
    const bonusFlag = this.#numbers.includes(bonusNumber);

    if (!Lotto.matchedCount.hasOwnProperty(winningCount)) return;

    if (winningCount === '5' && bonusFlag) {
      Lotto.matchedCount['5+bonus'] += 1;
      return;
    }

    Lotto.matchedCount[winningCount] += 1;
  }

  static purchaseLotto(count) {
    return Array.from({ length: count }, () => new Lotto());
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
