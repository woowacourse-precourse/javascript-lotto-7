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
    const prize = this.models.lottoPrize.getPrize(this.models.lottoStore.getLottos());

    this.views.output.printResultHeader();
    ["fifth", "forth", "third", "second", "first"].forEach((rank) => {
      const { condition, money, count } = prize[rank];
      if (rank === "second") {
        this.views.output.printBonusResult(condition, money.toLocaleString(), count);
      } else {
        this.views.output.printResult(condition, money.toLocaleString(), count);
      }
    });
  }
}

export default Controller;
