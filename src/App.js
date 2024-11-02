import LottoController from './components/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.promptPurchaseAmount();
  }
}

export default App;
