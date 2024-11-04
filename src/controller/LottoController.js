class LottoController {
  #lottoView;
  #lottoModel;

  constructor(view, model) {
    this.#lottoView = view;
    this.#lottoModel = model;
  }

  async run() {
    await this.#buyLotto();
    this.#issueLotto();
  }

  async #buyLotto() {
    const moneyInput = await this.#lottoView.getMoney();
    this.#lottoModel.calculateLottoAmount(moneyInput);

    const lottoAmount = this.#lottoModel.getLottoAmount();
    this.#lottoView.printLottoAmount(lottoAmount);
  }

  #issueLotto() {
    this.#lottoModel.createLottoSet();
    const lottoSet = this.#lottoModel.getLottoSet();
    this.#lottoView.printLottoSet(lottoSet);
  }
}

export default LottoController;
