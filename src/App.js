import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    const lotto = new LottoController();
    await lotto.play();
  }
}

export default App;
