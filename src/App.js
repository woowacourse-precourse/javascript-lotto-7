import LottoManager from "./LottoManager.js";

class App {
  async run() {
    const lottoManager = new LottoManager();

    await lottoManager.enterBudget();
  }
}

export default App;
