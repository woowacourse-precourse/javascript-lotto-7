import ConsoleView from "./views/ConsoleView.js";

class App {
  async run() {
    const purchaseAmount = ConsoleView.getPurchaseAmount();
  }
}

export default App;
