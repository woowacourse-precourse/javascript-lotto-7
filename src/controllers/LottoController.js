class LottoController {
  #InputView;
  #lottoValidator;

  constructor(inputView, lottoValidator) {
    this.#InputView = inputView;
    this.#lottoValidator = lottoValidator;
  }

  async purchaseLotto() {
    const amount = await this.#InputView.getPurchaseAmount();
    this.#lottoValidator.validatePurchaseAmount(amount);
  }
}

export default LottoController;
