import LottoController from './components/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.setPurchaseAmount();
    lottoController.generateLottoTickets();
    lottoController.displayLottoTickets();

    await lottoController.createLotto();
    await lottoController.setBonusNumber();

    lottoController.displayResults(lottoController.lotto.getNumbers());
  }
}

export default App;
