import { LottoController } from "./LottoController.js";

class App {
  #lottoController;

  constructor(lottoController = new LottoController()) {
    this.#lottoController = lottoController;
  }

  async run() {
    this.#lottoController.play();
  }
}

export default App;
