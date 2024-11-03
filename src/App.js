// import Lotto from './Lotto';
import InputHandler from './InputHandler.js';
import LottoManager from './LottoManager.js';
import LottoCalculator from './LottoCalculator.js';

class App {
  async run() {
    const buyPrice = await InputHandler.getBuyPrice();

    const lottoManager = new LottoManager(buyPrice);
    const lottos = lottoManager.getLottos();

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
