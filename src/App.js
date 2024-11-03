// import Lotto from './Lotto';
import InputHandler from './InputHandler.js';
import LottoManager from './LottoManager.js';
import LottoCalculator from './LottoCalculator.js';

class App {
  async run() {
    const buyPrice = await InputHandler.getBuyPrice();
    if (!buyPrice) {
      return;
    }
    const lottoManager = new LottoManager(buyPrice);
    if (!lottoManager) {
      return;
    }
    const lottos = lottoManager.getLottos();
    if (!lottos) {
      return;
    }

    const winningNumbers = await InputHandler.getWinningNumbers();
    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);

    const lottoResult = new LottoCalculator(
      buyPrice,
      lottos,
      winningNumbers,
      bonusNumber,
    );

    lottoResult.showResult();
  }
}

export default App;
