class LottoService {
  #lottoMatchChecker;
  #purchaseManager;
  #lottoIssuer;
  #winningStatsManager;
  #lottos = [];

  constructor(purchaseManager, lottoMatchChecker, lottoIssuer, winningStatsManager) {
    this.#lottoMatchChecker = lottoMatchChecker;
    this.#purchaseManager = purchaseManager;
    this.#lottoIssuer = lottoIssuer;
    this.#winningStatsManager = winningStatsManager;
  }

  addLotto(numbers) {
    this.#lottos.push(this.#lottoIssuer.createLotto(numbers));
  }

  getLottos() {
    return this.#lottos;
  }

  getMaxLottoCount(budget) {
    return this.#purchaseManager.calculateMaxLottos(budget);
  }

  getWinningStats(bonusNumber, winningNumbers) {
    const lottoResults = this.aggregateLottoResults(bonusNumber, winningNumbers);
    this.#winningStatsManager.updateWinningStats(lottoResults);

    return this.#winningStatsManager.getStats();
  }

  getProfitMargin(lottoPrice) {
    const lottoPurchaseCost = lottoPrice * this.#lottos.length;
    this.#winningStatsManager.calculateTotalProfit(prizeMoneyByRank);

    return this.#winningStatsManager.calculateProfitMargin(lottoPurchaseCost);
  }

  aggregateLottoResults(bonusNumber, winningNumbers) {
    return this.#lottos.map((lotto) => {
      const matchCount = this.#lottoMatchChecker.countMatches(winningNumbers, lotto);
      const hasBonusNumber = this.#lottoMatchChecker.hasBonusNumber(bonusNumber, lotto);

      return [matchCount, hasBonusNumber];
    });
  }
}

export default LottoService;
