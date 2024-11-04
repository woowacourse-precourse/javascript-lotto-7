import LottoController from "./controllers/LottoController.js";
import ConsoleView from "./views/ConsoleView.js";

class App {
  async run() {
    const consoleView = new ConsoleView();
    const lottoController = new LottoController();
    const purchaseAmount = await consoleView.getPurchaseAmount();
    consoleView.printLottoCount(purchaseAmount);
    const lottos = lottoController.generateLottos(purchaseAmount);
    consoleView.printLottoNumbers(lottos);
    const winningNumbers = await consoleView.getWinningNumbers();
    const bonusNumber = await consoleView.getBonusNumber(winningNumbers);
  }
}

export default App;
