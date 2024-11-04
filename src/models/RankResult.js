import { LOTTO } from "../constants/Lotto.js";
import LottoRank from "./LottoRank.js";

class RankResult {
  #ranks;
  #profitRate;

  static RANK = {
    FIRST: { MATCH_COUNT: 6, PRIZE: 2000000000 },
    SECOND: { MATCH_COUNT: 5, PRIZE: 30000000 },
    THIRD: { MATCH_COUNT: 5, PRIZE: 1500000 },
    FOURTH: { MATCH_COUNT: 4, PRIZE: 50000 },
    FIFTH: { MATCH_COUNT: 3, PRIZE: 5000 },
  };

  constructor() {
    this.#ranks = this.#initializeRanks();
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
    const totalProfit = this.#calculateTotalProfit();
    const purchaseMoney = lottoCount * LOTTO.PRICE;
    const profitRate = (totalProfit / purchaseMoney) * 100;
    this.#profitRate = profitRate.toFixed(1);
  }

  getLottoRankResult() {
    return {
      ranks: this.#ranks,
      profit: this.#profitRate,
    };
  }

  #initializeRanks() {
    return {
      first: this.#createRank("FIRST"),
      second: this.#createRank("SECOND", true),
      third: this.#createRank("THIRD"),
      fourth: this.#createRank("FOURTH"),
      fifth: this.#createRank("FIFTH"),
    };
  }

  #createRank(type, bonus = false) {
    const { MATCH_COUNT, PRIZE } = RankResult.RANK[type];
    return new LottoRank(MATCH_COUNT, PRIZE, bonus);
  }

  #checkIsPossibleRank(condition, rank) {
    if (condition()) {
      rank.addCount();
      return true;
    }

    return false;
  }

  #calculateTotalProfit() {
    let totalProfit = 0;

    Object.values(this.#ranks).forEach((rank) => {
      totalProfit += rank.getTotalMoney();
    });

    return totalProfit;
  }
}

export default RankResult;
