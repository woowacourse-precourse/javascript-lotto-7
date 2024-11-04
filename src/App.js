import LottoController from './controller/LottoController.js';

class App {
  async run() {
    const controller = new LottoController();
    await controller.init();
  }
}

export default App;
