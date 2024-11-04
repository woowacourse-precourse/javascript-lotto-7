import LottoManager from "./LottoManager.js";

class App {
  async run() {
    const lottoManager = new LottoManager();
    await lottoManager.runGame();
    await lottoManager.calculateResult();
    lottoManager.displayResult();
  }
}

export default App;
