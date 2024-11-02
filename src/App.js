import LottoController from "./controllers/LottoController.js";

class App {
  async run() {
    const consoleView = new ConsoleView();
    const purchaseAmount = await consoleView.getPurchaseAmount();
    const lottoController = new LottoController();
  }
}
    const lottos = lottoController.generateLottos(purchaseAmount);
export default App;
