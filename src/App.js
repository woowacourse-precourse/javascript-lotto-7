import LottoController from './controller/LottoController.js';
import OutputModules from './views/OutputModules.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }
  async run() {
    try {
      await this.#lottoController.execute();
    } catch (error) {
      OutputModules.printMessage(error.message);
      return error;
    }
  }
}

export default App;
