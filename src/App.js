import LottoController from './controllers/lottoController.js';

class App {
  async run() {
    await LottoController.start();
  }
}

export default App;
