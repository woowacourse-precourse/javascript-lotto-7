import LottoController from './controllers/LottoController.js';
import InputView from './views/InputView.js';
import LottoValidator from './domain/LottoValidator.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController(
      new InputView(),
      new LottoValidator(),
    );
  }

  async run() {
    await this.#lottoController.purchaseLotto();
  }
}

export default App;
