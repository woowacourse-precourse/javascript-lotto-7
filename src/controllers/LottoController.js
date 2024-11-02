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
    this.#outputLottoView.printPurchasedLottosInfo(this.#lottoPurchaser)
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
}
