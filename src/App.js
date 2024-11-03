import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    const LOTTO_CONTROLLER = new LottoController();
    await LOTTO_CONTROLLER.start();
  }
}

export default App;
