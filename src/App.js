import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    const controller = new LottoController();
    await controller.start();
  }
}

export default App;
