import LottoController from "./controller/LottoController.js";
import LottoPurchaseController from "./controller/LottoPurchaseController.js";
import LottoResultController from "./controller/LottoResultController.js";
import WinningNumberController from "./controller/WinningNumberController.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    const views = {
      inputView: InputView,
      outputView: OutputView,
    };

    await new LottoController(
      new LottoPurchaseController(views),
      new WinningNumberController(views),
      new LottoResultController(views)
    ).execute();
  }
}

export default App;
