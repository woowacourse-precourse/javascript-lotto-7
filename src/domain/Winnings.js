import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';

class Winnings {
  static #COUNT = { min: 3, bonusAvailable: 5 };

  static #MARK = { connection: ' - ', number: '개' };

  #winningList = [
    ['3개 일치 (5,000원)', 0],
    ['4개 일치 (50,000원)', 0],
    ['5개 일치 (1,500,000원)', 0],
    ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
    ['6개 일치 (2,000,000,000원)', 0],
  ];

  constructor(userLotto, winningNumbers, bonusNumber) {
    this.#findWinnings(userLotto, winningNumbers, bonusNumber);
  }

  #findWinnings(userLotto, winningNumbers, bonusNumber) {
    userLotto.forEach((lotto) => {
      const matchedCount = Winnings.#findMatchedNumber(lotto, winningNumbers);
      const isBonusWin = Winnings.#checkBonus(matchedCount, lotto, bonusNumber);

      if (matchedCount >= Winnings.#COUNT.min) {
        const index = Winnings.#findIndex(matchedCount, isBonusWin);

        this.#winningList[index][VALUES.index.detailValue] += 1;
      }
    });
  }

  static #findMatchedNumber(lotto, winningNumbers) {
    let matchedCount = 0;

    lotto.forEach((lottoNumber) => {
      if (winningNumbers.includes(lottoNumber)) {
        matchedCount += 1;
      }
    });

    return matchedCount;
  }

  static #checkBonus(matchedCount, lotto, bonusNumber) {
    const bonusAvailable = matchedCount === Winnings.#COUNT.bonusAvailable;

    if (bonusAvailable) {
      return lotto.includes(Number(bonusNumber));
    }

    return bonusAvailable;
  }

  static #findIndex(matchedCount, isBonusWin) {
    const index = matchedCount - Winnings.#COUNT.min;

    if (matchedCount <= Winnings.#COUNT.bonusAvailable && !isBonusWin) {
      return index;
    }

    return index + 1;
  }

  #getWinningDetails() {
    const { connection, number } = Winnings.#MARK;

    const details = this.#winningList.map((detail) => {
      const [detailKey, detailValue] = detail;
      const matchedCount = utils.convertNumberFormat(detailValue);

      return `${detailKey}${connection}${matchedCount}${number}`;
    });

    return details;
  }

  #getWinningStats() {
    const { division } = VALUES;
    const winningStats = this.#getWinningDetails().join(division);

    return winningStats;
  }

  getWinningsInfo() {
    const winningStats = this.#getWinningStats();

    return { winningStats, winningList: this.#winningList };
  }
}

export default Winnings;
