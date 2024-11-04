import LottoController from "./controller/LottoController.js";
import LottoPurchaseController from "./controller/LottoPurchaseController.js";
import LottoResultController from "./controller/LottoResultController.js";
import WinningNumberController from "./controller/WinningNumberController.js";

class App {
  async run() {
    await new LottoController(
      new LottoPurchaseController(),
      new WinningNumberController(),
      new LottoResultController()
    ).execute();
  }
}

export default App;
