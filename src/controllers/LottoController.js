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
    while (true) {
      try {
        const purchasePrice = await this.#inputLottoView.getInputPrice();
        this.#lottoPurchaser.purchase(purchasePrice);

        return;
      } catch (error) {
        this.#outputLottoView.printMessage(error.message);
      }
    }
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
        this.#winningLotto.setMainNumbers(winningLottoMainNumbers);

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

  #generateLottoResult() {
    this.#lottoPurchaser.compareLottosWithWinningLotto(this.#winningLotto);
    
    this.#outputLottoView.printLottoResult(
      this.#lottoPurchaser.getLottoResult()
    );
  }
}
