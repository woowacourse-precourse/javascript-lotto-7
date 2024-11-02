import LottoController from './controllers/LottoController.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    try {
      const lottoController = new LottoController();
      await lottoController.run();
    } catch (error) {
      OutputView.printMessage(error.message);
    }
  }
}

export default App;
