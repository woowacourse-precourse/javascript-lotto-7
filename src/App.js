import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import LottoStore from "./LottoStore.js";
import LottoPrize from "./LottoPrize.js";
import Controller from "./controller/Controller.js";

class App {
  controller;

  constructor() {
    this.controller = new Controller(
      { input: InputView, output: OutputView },
      {
        lottoStore: new LottoStore(),
        lottoPrize: new LottoPrize(),
      },
    );
  }

  async run() {
    await this.controller.buyLotto();
    await this.controller.setLottoPrize();
  }
}

export default App;
