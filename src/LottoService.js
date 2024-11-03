class LottoService {
  #lottoMatchChecker;
  #lottos;

  constructor(lottoMatchChecker, lottos) {
    this.#lottoMatchChecker = lottoMatchChecker;
    this.#lottos = lottos;
  }

  countMatches;

  aggregateLottoResults() {
    const lottoResults = this.#lottos.map((lotto) => {
      return [lottoMatchChecker.countMatchesIn(lotto), lottoMatchChecker.isBonusNumberIn(lotto)];
    });

    this.setRanks(lottoResults);
  }

  getRankCounts(lottoResults) {
    return rankCounts;
  }

  calculateTotalProfit() {
    this.calculateProfitMargin(totalProfit);
  }

  calculateProfitMargin() {
    return profitMargin;
  }
}
