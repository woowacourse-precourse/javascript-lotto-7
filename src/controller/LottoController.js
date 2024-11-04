class LottoController {
  #lottoView;
  #lottoModel;

  constructor(view, model) {
    this.#lottoView = view;
    this.#lottoModel = model;
  }

  async run() {
    await this.#buyLotto();
  }

  async #buyLotto() {
    const moneyInput = await this.#lottoView.getMoney();
    this.#lottoModel.calculateLottoAmount(moneyInput);

    const lottoAmount = this.#lottoModel.getLottoAmount();
  }
}

export default LottoController;
