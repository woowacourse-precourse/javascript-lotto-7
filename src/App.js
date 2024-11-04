import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import LottoStore from "./models/LottoStore.js";
import LottoPrize from "./models/LottoPrize.js";
import Controller from "./controller/Controller.js";
import LottoChecker from "./models/LottoChecker.js";

class App {
  controller;

  constructor() {
    const views = App.#initViews();
    const models = App.#initModels();
    this.controller = new Controller(views, models);
  }

  static #initViews() {
    return {
      input: InputView,
      output: OutputView,
    };
  }

  static #initModels() {
    const lottoChecker = new LottoChecker();
    return {
      lottoStore: new LottoStore(),
      lottoChecker,
      lottoPrize: new LottoPrize(lottoChecker),
    };
  }

  async run() {
    await this.controller.buyLotto();
    await this.controller.setLottoCheckerWinningNumbers();
    await this.controller.setLottoCheckerBonusNumber();
    this.controller.checkLotto();
  }
}

export default App;
