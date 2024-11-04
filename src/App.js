import LottoController from "./controllers/LottoController.js";
class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }
  async run() {
    await this.#lottoController.start();
  }
}

export default App;
