import { PRIZE_MONEY } from "../utils/constants.js";

class LottoResult {
  #results;

  constructor() {
    this.#results = {
      FIRST: 0, // 6개 일치
      SECOND: 0, // 5개 + 보너스
      THIRD: 0, // 5개 일치
      FOURTH: 0, // 4개 일치
      FIFTH: 0, // 3개 일치
      MISS: 0, // 2개 이하
    };
  }

  addResult(matchCount, hasBonus) {
    const rank = this.#determineRank(matchCount, hasBonus);
    this.#results[rank]++;
  }

  #determineRank(matchCount, hasBonus) {
    if (matchCount === 6) return "FIRST";
    if (matchCount === 5 && hasBonus) return "SECOND";
    if (matchCount === 5) return "THIRD";
    if (matchCount === 4) return "FOURTH";
    if (matchCount === 3) return "FIFTH";
    return "MISS";
  }

  calculateProfitRate(purchaseAmount) {
    const totalPrize = Object.entries(this.#results).reduce((sum, [rank, count]) => sum + PRIZE_MONEY[rank] * count, 0);

    return Number(((totalPrize / purchaseAmount) * 100).toFixed(1));
  }

  getResults() {
    return { ...this.#results };
  }
}

export default LottoResult;
