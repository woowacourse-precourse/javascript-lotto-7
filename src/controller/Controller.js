class Controller {
  views;

  models;

  constructor(views, models) {
    this.views = views;
    this.models = models;
  }

  async buyLotto() {
    const money = await this.views.input.getLottoMoney();
    this.models.lottoStore.buyLotto(money);

    this.views.output.printLottoCount(this.models.lottoStore.getLottoCount());
    this.views.output.printLottos(this.models.lottoStore.getLottos());
  }

  async setLottoPrize() {
    const numbers = await this.views.input.getWinningNumbers();
    this.models.lottoPrize.createWinningNumbers(numbers);
    this.views.output.printNewLine();

    const bonusNumber = await this.views.input.getBonusNumber();
    this.models.lottoPrize.createBonusNumber(bonusNumber);
  }

  checkLotto() {
    this.views.output.printResultHeader();
  }
}

export default Controller;
