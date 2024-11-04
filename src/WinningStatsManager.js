class WinningStatsManager {
  #winningStats;
  #totalProfit;

  constructor() {
    this.#winningStats = {
      match_6: 0,
      match_5_bonus: 0,
      match_5: 0,
      match_4: 0,
      match_3: 0,
    };
    this.#totalProfit = 0;
  }

  getStats() {
    return this.#winningStats;
  }

  updateWinningStats(lottoResults) {
    lottoResults.forEach(([matchCount, hasBonusNumber]) => {
      if (matchCount === 5 && hasBonusNumber) {
        this.#winningStats[`match_${matchCount}_bonus`]++;
        return;
      }

      if (matchCount > 2) {
        this.#winningStats[`match_${matchCount + hasBonusNumber}`]++;
        return;
      }

      if (hasBonusNumber && matchCount > 1) {
        this.#winningStats[`match_${matchCount + hasBonusNumber}`]++;
      }
    });
  }

  calculateTotalProfit(prizeMoneyByRank) {
    this.#totalProfit += Object.keys(this.#winningStats).reduce((totalProfit, rank) => {
      return totalProfit + prizeMoneyByRank[rank] * this.#winningStats[rank];
    }, 0);
  }

  calculateProfitMargin(lottoPurchaseCost) {
    const lottoProfitMargin = (this.#totalProfit / lottoPurchaseCost) * 100;

    return lottoProfitMargin.toFixed(1);
  }
}

export default WinningStatsManager;
