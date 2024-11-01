class Controller {
  views;

  models;

  constructor(views, models) {
    this.views = views;
    this.models = models;
  }

  async buyLotto() {
    const money = await this.views.input.getLottoMoney();
    const lottoStore = new this.models.LottoStore(money);

    this.views.output.printLottoCount(lottoStore.getLottoCount());
    this.views.output.printLottos(lottoStore.getLottos());
  }

  async setLottoPrize() {
    const numbers = await this.views.input.getWinningNumbers();
    this.models.lottoPrize.createWinningNumbers(numbers);
    this.views.output.printNewLine();

    const bonusNumber = await this.views.input.getBonusNumber();
    this.models.lottoPrize.createBonusNumber(bonusNumber);
  }
}

export default Controller;
