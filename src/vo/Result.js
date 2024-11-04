import { INITIAL_STATISTICS, RANKS } from '../constant/constant.js';
import { LOTTO, PRIZE_MONEY } from '../constant/constant.js';

class Result {
  #statistics;
  #profitRate;

  constructor(lottoAmount, lottoSet, winningNumbers, bonusNumber) {
    this.#statistics = { ...INITIAL_STATISTICS };
    this.#calculateStatistics(lottoSet, winningNumbers, bonusNumber);
    this.#calculateProfitRate(lottoAmount);
  }

  #calculateStatistics(lottoSet, winningNumbers, bonusNumber) {
    lottoSet.forEach((lotto) => {
      const lottoNumbers = lotto.getLottoNumbers();
      const matchCount = this.#getMatchCount(lottoNumbers, winningNumbers);
      const hasBonus = this.#hasBonusNumber(lottoNumbers, bonusNumber);
      const rank = this.#getRank(matchCount, hasBonus);

      this.#updateStatistics(rank);
    });
  }

  #getMatchCount(lottonumbers, winningNumbers) {
    const matchedNumbers = lottonumbers.filter((lottoNubmer) =>
      winningNumbers.getWinningNumbers().includes(lottoNubmer)
    );

    return matchedNumbers.length;
  }

  #hasBonusNumber(lottonumbers, bonusNumber) {
    return lottonumbers.includes(bonusNumber);
  }

  #getRank(matchCount, hasBonusNumber) {
    switch (matchCount) {
      case 6:
        return RANKS.FIRST;
      case 5:
        if (hasBonusNumber) {
          return RANKS.SECOND;
        }
        return RANKS.THIRD;
      case 4:
        return RANKS.FOURTH;
      case 3:
        return RANKS.FIFTH;
      default:
        return RANKS.NONE;
    }
  }

  #updateStatistics(rank) {
    if (this.#statistics.hasOwnProperty(rank)) {
      this.#statistics[rank] += 1;
    }
  }

  getStatistics() {
    return this.#statistics;
  }

  #getSumOfPrize() {
    const entries = Object.entries(this.#statistics);

    return entries.reduce(
      (total, [rank, count]) => total + count * PRIZE_MONEY[rank],
      0
    );
  }

  #calculateProfitRate(lottoAmount) {
    const totalSpent = LOTTO.PRICE * lottoAmount;
    const totalPrize = this.#getSumOfPrize() - totalSpent;

    this.#profitRate = ((totalPrize / totalSpent) * 100).toFixed(1);
  }

  getProfitRate() {
    return this.#profitRate;
  }
}

export default Result;
