import LottoController from './controllers/LottoController.js';
import InputView from './views/InputView.js';
import LottoValidator from './domain/LottoValidator.js';
import OutputView from './views/OutputView.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController(
      new InputView(),
      new OutputView(),
      new LottoValidator(),
    );
  }

  async run() {
    await this.#lottoController.purchaseLotto();
  }
}

export default App;
