import LottoRank from "./LottoRank.js";

class RankResult {
  #ranks;
  #profitRate;

  constructor() {
    this.#ranks = {
      first: new LottoRank(6, 2000000000),
      second: new LottoRank(5, 30000000, true),
      third: new LottoRank(5, 1500000),
      fourth: new LottoRank(4, 50000),
      fifth: new LottoRank(3, 5000),
    };

    this.#profitRate = 0;
  }

  registerRank(matchCount, hasBonus) {
    if (this.#checkIsPossibleRank(() => matchCount === 6, this.#ranks.first)) return;
    if (this.#checkIsPossibleRank(() => matchCount === 5 && hasBonus, this.#ranks.second)) return;
    if (this.#checkIsPossibleRank(() => matchCount === 5, this.#ranks.third)) return;
    if (this.#checkIsPossibleRank(() => matchCount === 4, this.#ranks.fourth)) return;
    if (this.#checkIsPossibleRank(() => matchCount === 3, this.#ranks.fifth)) return;
  }

  calculateProfit(lottoCount) {
    let totalProfit = 0;

    Object.values(this.#ranks).forEach((rank) => {
      totalProfit += rank.getTotalMoney();
    });

    const purchaseMoney = lottoCount * 1000;
    const profitRate = (totalProfit / purchaseMoney) * 100;
    this.#profitRate = profitRate.toFixed(1);
  }

  getLottoRankResult() {
    return {
      rank: this.#ranks,
      profit: this.#profitRate,
    };
  }

  #checkIsPossibleRank(condition, rank) {
    if (condition()) {
      rank.addCount();
      return true;
    }

    return false;
  }
}

export default RankResult;
