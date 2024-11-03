import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    await LottoController.start();
  }
}

export default App;
