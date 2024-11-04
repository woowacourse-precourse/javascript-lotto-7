import Lotto from './components/Lotto.js';
import LottoController from './components/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.promptPurchaseAmount();
    lottoController.generateLottoTickets();
    lottoController.ioHandler.displayLottoTickets();

    const lotto = await Lotto.createLotto();
    await lottoController.promptBonusNumber();

    lottoController.ioHandler.displayWinningResult(lotto.getNumbers());
  }
}

export default App;
