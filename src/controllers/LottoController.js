class LottoController {
  #InputView;

  constructor(inputView) {
    this.#InputView = inputView;
  }

  async purchaseLotto() {
    const purchseAmount = await this.#InputView.getPurchaseAmount();
  }
}

export default LottoController;
