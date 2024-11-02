import ConsoleView from "./views/ConsoleView.js";

class App {
  async run() {
    const consoleView = new ConsoleView();
    const purchaseAmount = await consoleView.getPurchaseAmount();
    consoleView.printLottoCount(purchaseAmount);
  }
}

export default App;
