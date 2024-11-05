import LottoController from "./controllers/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.purchase();
    await lottoController.issuance();
    await lottoController.matching();
    lottoController.statistics();
  }
}

export default App;
