import LottoController from './controller/LottoController.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }

  async run() {
    await this.#lottoController.initLottoProcess();
    await this.#lottoController.createAnswerNumbers();
    this.#lottoController.displayLottoWinning();
  }
}

export default App;
