import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import LottoStore from "./models/LottoStore.js";
import LottoPrize from "./models/LottoPrize.js";
import Controller from "./controller/Controller.js";
import LottoChecker from "./models/LottoChecker.js";

class App {
  controller;

  constructor() {
    const lottoChecker = new LottoChecker();
    this.controller = new Controller(
      { input: InputView, output: OutputView },
      {
        lottoStore: new LottoStore(),
        lottoChecker,
        lottoPrize: new LottoPrize(lottoChecker),
      },
    );
  }

  async run() {
    await this.controller.buyLotto();
    await this.controller.setLottoChecker();
    this.controller.checkLotto();
  }
}

export default App;
