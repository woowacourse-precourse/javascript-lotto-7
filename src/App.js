import LottoController from './controller/LottoController.js';

class App {
  async run() {
    await new LottoController().start();
  }
}

export default App;
