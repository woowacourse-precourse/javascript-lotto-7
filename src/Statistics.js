import { PRIZES, WINNING_KEYS } from './constants/lotto.js';
import OutputProcessor from './OutputProcessor.js';

class Statistics {
  #winningCounts = {
    [WINNING_KEYS.FIRST]: 0,
    [WINNING_KEYS.SECOND]: 0,
    [WINNING_KEYS.THIRD]: 0,
    [WINNING_KEYS.FOURTH]: 0,
    [WINNING_KEYS.FIFTH]: 0
  };

  #totalEarningsRate = 0;

  constructor(lottos, purchasePrice, winningNumbers, bonusNumber) {
    this.lottos = lottos;
    this.purchasePrice = purchasePrice;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.#checkMatches();
    this.#calculateTotalEarningsRate();
  }

  #checkMatches() {
    this.lottos.forEach((lotto) => {
      const matchedNumbers = lotto.get().filter((num) => this.winningNumbers.includes(String(num))).length;
      const isBonusMatched = lotto.get().includes(Number(this.bonusNumber));
      if (matchedNumbers < 3) {
        return;
      }
      this.#calculateWinning(matchedNumbers, isBonusMatched);
    });
  }

  #calculateWinning(matchedNumbers, isBonusMatched) {
    let winning = '';
    if (matchedNumbers === 6) {
      winning = WINNING_KEYS.FIRST;
    } else if (matchedNumbers === 5 && isBonusMatched) {
      winning = WINNING_KEYS.SECOND;
    } else if (matchedNumbers === 5) {
      winning = WINNING_KEYS.THIRD;
    } else if (matchedNumbers === 4) {
      winning = WINNING_KEYS.FOURTH;
    } else if (matchedNumbers === 3) {
      winning = WINNING_KEYS.FIFTH;
    }

    this.#winningCounts[winning] += 1;
  }

  #calculateTotalEarningsRate() {
    const totalPrize = Object.keys(this.#winningCounts).reduce(
      (total, winning) => total + this.#winningCounts[winning] * PRIZES[winning],
      0
    );
    this.#totalEarningsRate = (Math.round((totalPrize / this.purchasePrice) * 1000) / 10).toFixed(1);
  }

  result() {
    OutputProcessor.printStatistics(this.#winningCounts, this.#totalEarningsRate);
  }
}

export default Statistics;
