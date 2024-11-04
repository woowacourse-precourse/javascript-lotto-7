class LottoGameExecutor {

  #lottoGenerator;

  #lottoResultManager;

  #rateCalculator;

  #inputReader;

  #outputPrinter;

  constructor(lottoGenerator, lottoResultManager, rateCalculator, inputReader, outputPrinter) {
    this.#lottoGenerator = lottoGenerator;
    this.#lottoResultManager = lottoResultManager;
    this.#rateCalculator = rateCalculator;
    this.#inputReader = inputReader;
    this.#outputPrinter = outputPrinter;
  }

  async startGame() {
    const { purchaseAmount, purchaseLottoCount } = await this.#inputReader.inputPayment();
    this.#outputPrinter.printEmptyLine();

    const lottos = this.#lottoGenerator.generateLottosBycount(purchaseLottoCount);
    this.#outputPrinter.printPurchaseCountAndLottos(purchaseLottoCount, lottos);

    const { winningNumbers, bonusNumber } = await this.#inputReader.inputLottoWinningNumbers();
    const winningResults = this.#lottoResultManager.generateWinningResult(lottos, winningNumbers, bonusNumber);
    this.#outputPrinter.printWinningResults(winningResults);

    const totalPrize = this.#lottoResultManager.getTotalPrize();
    const rateOfReturn = this.#rateCalculator.calculateRateOfReturn(totalPrize, purchaseAmount);
    this.#outputPrinter.printTotalRateOfReturn(rateOfReturn);
  }
}

export default LottoGameExecutor;