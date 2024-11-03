import LottoIssuer from './Model/LottoIssuer.js';
import WinningLotto from './Model/WinningLotto.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    const purchaseAmount = await InputView.readLottoPurchaseAmount();

    const lottoIssuer = new LottoIssuer(purchaseAmount);
    const issuedLottos = lottoIssuer.issue();

    OutputView.printPurchasedLottosAmount(issuedLottos.length);
    issuedLottos.forEach((lotto) =>
      OutputView.printPurchasedLottoNumbers(lotto.getSortedNumbers()),
    );

    const winningLotto = new WinningLotto();
    const winningNumbers = await InputView.readWinningNumbers();
    winningLotto.setWinningNumbers(winningNumbers);
  }
}

export default App;
