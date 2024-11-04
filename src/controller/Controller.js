class Controller {
  views;

  models;

  constructor(views, models) {
    this.views = views;
    this.models = models;

    this.models.lottoStore.subscribe(this.views.output.updateLotto);
    this.models.lottoPrize.subscribe(this.views.output.updatePrize);
  }

  async buyLotto() {
    try {
      const money = await this.views.input.getLottoMoney();
      this.models.lottoStore.buyLotto(money);
    } catch (error) {
      this.views.output.printError(error.message);
      await this.buyLotto();
    }
  }

  async setLottoCheckerWinningNumbers() {
    try {
      const numbers = await this.views.input.getWinningNumbers();
      this.models.lottoChecker.createWinningNumbers(numbers);
      this.views.output.printNewLine();
    } catch (error) {
      this.views.output.printError(error.message);
      await this.setLottoCheckerWinningNumbers();
    }
  }

  async setLottoCheckerBonusNumber() {
    try {
      const bonusNumber = await this.views.input.getBonusNumber();
      this.models.lottoChecker.createBonusNumber(bonusNumber);
    } catch (error) {
      this.views.output.printError(error.message);
      await this.setLottoCheckerBonusNumber();
    }
  }

  checkLotto() {
    this.models.lottoPrize.getResult(
      this.models.lottoStore.getLottos(),
      this.models.lottoStore.getMoney(),
    );
  }
}

export default Controller;
