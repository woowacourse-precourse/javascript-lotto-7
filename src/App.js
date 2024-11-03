import LottoController from './controllers/LottoController.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import LottoGame from './domain/LottoGame.js';
import LottoValidator from './domain/LottoValidator.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController(
      new InputView(),
      new OutputView(),
      new LottoGame(),
      new LottoValidator(),
    );
  }

  async run() {
    await this.#lottoController.start();
  }
}

export default App;
