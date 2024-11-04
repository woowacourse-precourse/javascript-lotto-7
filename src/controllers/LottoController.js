export default class LottoController {
  #lottoPurchaser;
  #winningLotto;
  #inputLottoView;
  #outputLottoView;

  constructor(lottoPurchaser, winningLotto, inputLottoView, outPutLottoView) {
    this.#lottoPurchaser = lottoPurchaser;
    this.#winningLotto = winningLotto;
    this.#inputLottoView = inputLottoView;
    this.#outputLottoView = outPutLottoView;
  }

  async run() {
    await this.#purchaseLottos();
    this.#outputLottoView.printPurchasedLottosInfo(this.#lottoPurchaser);

    await this.#decideWinningLotto();

    this.#generateLottoResult();
  }

  async #purchaseLottos() {
    await this.#retryInputUntilSuccess(
      () => this.#inputLottoView.getInputPrice(),
      (result) => this.#lottoPurchaser.purchase(result)
    );
  }

  async #decideWinningLotto() {
    await this.#decideWinningLottoMainNumbers();
    await this.#decideWinningLottoBonusNumber();
  }

  async #decideWinningLottoMainNumbers() {
    while (true) {
      try {
        const winningLottoMainNumbers =
          await this.#inputLottoView.getInputWinningLottoMainNumbers();
        this.#winningLotto.setMainLotto(winningLottoMainNumbers);

        return;
      } catch (error) {
        this.#outputLottoView.printMessage(error.message);
      }
    }
  }

  async #decideWinningLottoBonusNumber() {
    while (true) {
      try {
        const winningLottoBonusNumber =
          await this.#inputLottoView.getInputWinningLottoBonusNumber();
        this.#winningLotto.setBonusNumber(winningLottoBonusNumber);

        return;
      } catch (error) {
        this.#outputLottoView.printMessage(error.message);
      }
    }
  }

  async #retryInputUntilSuccess(inputFunction, taskFunction) {
    while (true) {
      try {
        const result = await inputFunction();
        taskFunction(result);

        return;
      } catch (error) {
        this.#outputLottoView.printMessage(error.message);
      }
    }
  }

  #generateLottoResult() {
    this.#lottoPurchaser.compareLottosWithWinningLotto(this.#winningLotto);
    this.#lottoPurchaser.calculateEarningRate()

    const lottoResult = this.#lottoPurchaser.getLottoResult();

    this.#outputLottoView.printLottoResult(lottoResult);
    this.#outputLottoView.printEarningRate(lottoResult);
  }
}
