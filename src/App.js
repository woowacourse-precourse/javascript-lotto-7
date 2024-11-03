import LottoController from './components/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.promptPurchaseAmount();
    lottoController.generateLottoTickets();
    lottoController.displayLottoTickets();
  }
}

export default App;
