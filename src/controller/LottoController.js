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
    await this.#drawNumbers();
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

  async #drawNumbers() {
    const winningNumbers = await this.#lottoView.getWinningNumbers();
    this.#lottoModel.setWinningNumbers(winningNumbers);

    const bonusNumber = await this.#lottoView.getBonusNumber();
    this.#lottoModel.setBonusNumber(bonusNumber);
  }
}

export default LottoController;
