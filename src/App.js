import LottoMachine from './LottoMachine.js';
import LottoResult from './LottoResult.js';

class App {
  async run() {
    const lottoMachine = new LottoMachine();
    const lottoResult = new LottoResult();

    const purchaseAmount = await lottoMachine.readPurchaseAmount();
    const purchasedLottos = lottoMachine.purchaseLottos(purchaseAmount);

    await lottoResult.readWinningNumbers();
    await lottoResult.readBonusNumber();

    lottoResult.printWinnerStatistics(purchaseAmount, purchasedLottos);
  }
}

export default App;
