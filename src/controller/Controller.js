class Controller {
  views;

  models;

  constructor(views, models) {
    this.views = views;
    this.models = models;
  }

  async buyLotto() {
    try {
      const money = await this.views.input.getLottoMoney();
      this.models.lottoStore.buyLotto(money);

      this.views.output.printLottoCount(this.models.lottoStore.getLottoCount());
      this.views.output.printLottos(this.models.lottoStore.getLottos());
    } catch (error) {
      this.views.output.printError(error.message);
      await this.buyLotto();
    }
  }

  async setLottoChecker() {
    const numbers = await this.views.input.getWinningNumbers();
    this.models.lottoChecker.createWinningNumbers(numbers);
    this.views.output.printNewLine();

    const bonusNumber = await this.views.input.getBonusNumber();
    this.models.lottoChecker.createBonusNumber(bonusNumber);
  }

  checkLotto() {
    this.views.output.printResultHeader();
    const prize = this.models.lottoPrize.getPrize(this.models.lottoStore.getLottos());
    ["fifth", "forth", "third", "second", "first"].forEach((rank) => {
      const { condition, money, count } = prize[rank];
      if (rank === "second") {
        this.views.output.printBonusResult(condition, money.toLocaleString(), count);
      } else {
        this.views.output.printResult(condition, money.toLocaleString(), count);
      }
    });
    this.views.output.printReturnRate(
      this.models.lottoPrize.getReturnRate(this.models.lottoStore.getMoney()).toFixed(1),
    );
  }
}

export default Controller;
