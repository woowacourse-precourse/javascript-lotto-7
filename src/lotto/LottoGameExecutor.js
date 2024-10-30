class LottoGameExecutor {
  #lottoPurchaseAmount;

  #maxlottoPurchaseAmount;

  #lottoNumberCount;

  #lottoNumberScope;

  constructor(lottoConfig) {
    this.#lottoPurchaseAmount = lottoConfig.PURCHASE_AMOUNT;
    this.#maxlottoPurchaseAmount = lottoConfig.MAX_PURCHASE_AMOUNT;
    this.#lottoNumberCount = lottoConfig.NUMBER_COUNT;
    this.#lottoNumberScope = {
      minNumber: lottoConfig.NUMBER_MIN_VALUE,
      maxNumber: lottoConfig.NUMBER_MAX_VALUE,
    }
  }

  startGame() {

  }
}

export default LottoGameExecutor;