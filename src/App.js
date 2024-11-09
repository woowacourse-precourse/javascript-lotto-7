import LottoController from './LottoController.js';

class App {
  async run() {
    await new LottoController().run();
  }
}

export default App;
