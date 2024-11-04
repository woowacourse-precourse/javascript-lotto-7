import { LOTTO } from './constant/index.js';
import getRandomSortedNumbers from './util/getRandomSortedNumbers.js';
class Lotto {
  static matchedCount = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
  #numbers;

  constructor() {
    this.#numbers = getRandomSortedNumbers(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.COUNT,
    );
  }

  static purchaseLotto(count) {
    return Array.from({ length: count }, () => new Lotto());
  }

  static matchLotto(lottoList, winningNumbers, bonusNumber) {
    lottoList.forEach((lotto) =>
      lotto.matchNumbers(winningNumbers, bonusNumber),
    );
  }

  static getTotalProfit() {
    return Object.entries(Lotto.matchedCount).reduce((total, [key, count]) => {
      return total + LOTTO.WINNING_AMOUNT[key] * count;
    }, 0);
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

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
