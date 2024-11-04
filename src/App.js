import Lotto from './components/Lotto.js';
import LottoController from './components/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.setPurchaseAmount();
    lottoController.generateLottoTickets();
    lottoController.ioHandler.displayLottoTickets(
      lottoController.getLottoTickets(),
      lottoController.getPurchaseAmount(),
    );

    const lotto = await Lotto.createLotto();
    await lottoController.setBonusNumber();

    lottoController.displayResults(lotto.getNumbers());
  }
}

export default App;
