import LOTTO_RULE from './constant/lotto.js';

class Bank {
  #totalWinningPrize;

  calculateTotalWinningPrize(rankInfos) {
    this.#totalWinningPrize = rankInfos
      .map((rankCount, index) => this.#calculateWinningPrize(rankCount, index))
      .slice(1)
      .reduce((acc, cur) => acc + cur, 0);
  }

  #calculateWinningPrize(rankCount, index) {
    switch (index) {
      case LOTTO_RULE.RANK.FIRST:
        return LOTTO_RULE.REWARD.FIRST * rankCount;
      case LOTTO_RULE.RANK.SECOND:
        return LOTTO_RULE.REWARD.SECOND * rankCount;
      case LOTTO_RULE.RANK.THIRD:
        return LOTTO_RULE.REWARD.THIRD * rankCount;
      case LOTTO_RULE.RANK.FOURTH:
        return LOTTO_RULE.REWARD.FOURTH * rankCount;
      case LOTTO_RULE.RANK.FIFTH:
        return LOTTO_RULE.REWARD.FIFTH * rankCount;
      default:
        return LOTTO_RULE.REWARD.NONE;
    }
  }

  getTotalWinningPrize() {
    return this.#totalWinningPrize;
  }
}

export default Bank;
