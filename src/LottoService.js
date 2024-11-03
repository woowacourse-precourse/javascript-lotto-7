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
    this.calculateProfitMargin(totalProfit);
  }

  calculateProfitMargin() {
    return profitMargin;
  }
}

export default LottoService;
