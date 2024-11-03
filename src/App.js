import LottoController from './controllers/LottoController.js';
import InputView from './views/InputView.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController(new InputView());
  }

  async run() {
    await this.#lottoController.purchaseLotto();
  }
}

export default App;
