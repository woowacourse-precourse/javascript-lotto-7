import InputHandler from './handlers/InputHandler.js';
import OutputHandler from './handlers/OutputHandler.js';
import PurchaseLotto from './PurchaseLotto.js';
import LottoList from './LottoList.js';
import LottoResultCalculator from './LottoResultCalculator.js';

class App {
  async run() {
    const purchaseMoney = await InputHandler.getPurchaseMoney();
    const lottoNumbers = this.purchaseLottoTicket(purchaseMoney);

    const winningNumbers = await InputHandler.getWinningNumbers();

    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);

    const lottoCalculator = new LottoResultCalculator(winningNumbers, bonusNumber);
    const { lottoResult, profitRate } = lottoCalculator.getLottoResult(lottoNumbers, purchaseMoney);

    OutputHandler.printLottoResult(lottoResult);
    OutputHandler.printProfitRate(profitRate);
  }

  purchaseLottoTicket(purchaseMoney) {
    const purchaseLotto = new PurchaseLotto(purchaseMoney);
    const lottoQuantity = purchaseLotto.getQuantity();
    OutputHandler.printPurchaseQuantity(lottoQuantity);

    const lottoList = new LottoList(purchaseLotto.getQuantity());
    const lottoNumbers = lottoList.getTickets();
    OutputHandler.printLottoTickets(lottoNumbers);

    return lottoNumbers;
  }
}

export default App;
