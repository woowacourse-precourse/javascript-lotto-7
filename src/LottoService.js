class LottoService {
  #lottoMatchChecker;
  #lottos;

  constructor(lottoMatchChecker, lottos) {
    this.#lottoMatchChecker = lottoMatchChecker;
    this.#lottos = lottos;
  }

  getWinningStats() {
    const lottoResults = this.aggregateLottoResults();
    const rankCounts = {
      match_6: 0,
      match_5_bonus: 0,
      match_5: 0,
      match_4: 0,
      match_3: 0,
    };

    lottoResults.forEach(([matchCount, hasBonusNumber]) => {
      const totalMatchCount = matchCount + hasBonusNumber;

      if (matchCount === 5 && hasBonusNumber) {
        rankCounts[`match_${matchCount}_bonus`] += 1;
        return;
      }

      rankCounts[`match_${totalMatchCount}`] += 1;
    });

    return rankCounts;
  }

  aggregateLottoResults() {
    const lottoResults = this.#lottos.map((lotto) => {
      return [this.#lottoMatchChecker.countMatchesIn(lotto), this.#lottoMatchChecker.isBonusNumberIn(lotto)];
    });

    return lottoResults;
  }

  calculateTotalProfit(rankCounts) {
    const prizeMoneyByRank = {
      match_6: 2000000000,
      match_5_bonus: 30000000,
      match_5: 1500000,
      match_4: 50000,
      match_3: 5000,
    };

    return Object.keys(rankCounts).reduce((totalProfit, rank) => {
      return totalProfit + prizeMoneyByRank[rank] * rankCounts[rank];
    }, 0);
  }

  calculateProfitMargin(rankCounts) {
    return profitMargin;
  }
}

export default LottoService;
