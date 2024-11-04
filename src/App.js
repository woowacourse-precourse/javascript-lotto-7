import InputHandler from './handlers/InputHandler.js';
import PurchaseLotto from './PurchaseLotto.js';
import LottoList from './LottoList.js';
import LottoResultCalculator from './LottoResultCalculator.js';

class App {
  async run() {
    const purchaseMoney = await InputHandler.getPurchaseMoney();

    const purchaseLotto = new PurchaseLotto(purchaseMoney);
    const lottoQuantity = purchaseLotto.getQuantity();

    const lottoList = new LottoList(purchaseLotto.getQuantity());
    const lottoNumbers = lottoList.getTickets();

    const winningNumbers = await InputHandler.getWinningNumbers();

    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);

    const lottoCalculator = new LottoResultCalculator(
      winningNumbers,
      bonusNumber,
    );
    const { lottoResult, profitRate } = lottoCalculator.getLottoResult(
      lottoNumbers,
      purchaseMoney,
    );
  }
}

export default App;
