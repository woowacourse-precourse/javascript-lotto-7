import LottoController from "./controllers/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.start();
  }
}

export default App;
