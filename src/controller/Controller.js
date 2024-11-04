class Controller {
  views;

  models;

  constructor(views, models) {
    this.views = views;
    this.models = models;

    this.models.lottoStore.subscribe(this.views.output.updateLotto);
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
