import LOTTO_RULE from './constant/lotto.js';

class Bank {
  #totalWinningPrize;
  #profitRate;

  calculateTotalWinningPrize(rankInfos) {
    this.#totalWinningPrize = rankInfos
      .map((rankCount, index) => this.#calculateWinningPrize(rankCount, index))
      .reduce((acc, cur) => acc + cur, 0);
  }

  #calculateWinningPrize(rankCount, index) {
    switch (index) {
      case LOTTO_RULE.RANK_COUNT_INDEX.FIRST:
        return LOTTO_RULE.REWARD.FIRST * rankCount;
      case LOTTO_RULE.RANK_COUNT_INDEX.SECOND:
        return LOTTO_RULE.REWARD.SECOND * rankCount;
      case LOTTO_RULE.RANK_COUNT_INDEX.THIRD:
        return LOTTO_RULE.REWARD.THIRD * rankCount;
      case LOTTO_RULE.RANK_COUNT_INDEX.FOURTH:
        return LOTTO_RULE.REWARD.FOURTH * rankCount;
      case LOTTO_RULE.RANK_COUNT_INDEX.FIFTH:
        return LOTTO_RULE.REWARD.FIFTH * rankCount;
      default:
        return LOTTO_RULE.REWARD.NONE;
    }
  }

  calculateProfitRate(purchaseAmount) {
    this.#profitRate = (this.#totalWinningPrize / purchaseAmount) * 100;
  }

  getProfitRate() {
    return this.#profitRate.toFixed(1);
  }
}

export default Bank;
