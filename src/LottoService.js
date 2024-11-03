class LottoService {
  #lottoMatchChecker;
  #purchaseManager;
  #lottoIssuer;
  #lottos = [];

  constructor(purchaseManager, lottoMatchChecker, lottoIssuer) {
    this.#lottoMatchChecker = lottoMatchChecker;
    this.#purchaseManager = purchaseManager;
    this.#lottoIssuer = lottoIssuer;
  }

  getLottos() {
    return this.#lottos;
  }

  addLotto(numbers) {
    this.#lottos.push(this.#lottoIssuer.createLotto(numbers));
  }

  getMaxLottoCount(budget) {
    this.#purchaseManager.calculateMaxLottos(budget);
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

  calculateProfitMargin(lottoPrice, rankCounts) {
    const lottoTotalProfit = this.calculateTotalProfit(rankCounts);
    const lottoPurchaseCost = this.#lottos.length * lottoPrice;
    const lottoProfitMargin = lottoTotalProfit / lottoPurchaseCost;

    return lottoProfitMargin.toFixed(1);
  }
}

export default LottoService;
