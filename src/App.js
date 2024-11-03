import Lotto from './components/Lotto.js';
import LottoController from './components/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.promptPurchaseAmount();
    lottoController.generateLottoTickets();
    lottoController.displayLottoTickets();

    const lotto = await Lotto.promptLotto();
  }
}

export default App;
