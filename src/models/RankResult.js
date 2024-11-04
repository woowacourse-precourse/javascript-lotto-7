class RankResult {
  // 결과 맵 저장
  #rankResult;
  #profitRate;

  constructor() {
    this.#rankResult = {
      first: [0, 2000000000],
      second: [0, 30000000],
      third: [0, 1500000],
      fourth: [0, 50000],
      fifth: [0, 5000],
    };
    this.#profitRate = 0;
  }

  registerRank(matchCount, hasBonus) {
    if (matchCount === 6) this.#rankResult.first[0]++;
    else if (matchCount === 5 && hasBonus) this.#rankResult.second[0]++;
    else if (matchCount === 5) this.#rankResult.third[0]++;
    else if (matchCount === 4) this.#rankResult.fourth[0]++;
    else if (matchCount === 3) this.#rankResult.fifth[0]++;
  }

  calculateProfit(lottoCount) {
    let totalProfit = 0;

    Object.values(this.#rankResult).forEach(([count, money]) => {
      totalProfit += count * money;
    });

    const profit = (totalProfit / (lottoCount * 1000)) * 100;
    this.#profitRate = profit.toFixed(1);
  }

  getLottoRankResult() {
    return {
      rank: this.#rankResult,
      profit: this.#profitRate,
    };
  }
}

export default RankResult;
