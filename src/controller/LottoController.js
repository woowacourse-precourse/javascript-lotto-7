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
    this.#calculateResult();
    this.#printResult();
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

  #calculateResult() {
    this.#lottoModel.calculateResult();
  }

  #printResult() {
    const { statistics, profitRate } = this.#lottoModel.getResults();
    this.#lottoView.printStatistics(statistics);
    this.#lottoView.printProfitRate(profitRate);
  }
}

export default LottoController;
