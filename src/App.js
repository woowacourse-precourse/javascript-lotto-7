import lottoController from './controller/LottoController.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new lottoController();
  }
  async run() {
    await this.#lottoController.start();
  }
}

export default App;
