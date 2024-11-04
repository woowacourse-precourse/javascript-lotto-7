import LottoController from "./controllers/LottoController.js";
import LottoPurchaseController from "./controllers/LottoPurchaseController.js";
import LottoResultController from "./controllers/LottoResultController.js";
import WinningNumberController from "./controllers/WinningNumberController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

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
