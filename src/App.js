import LottoIssuer from './Model/LottoIssuer.js';
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

    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber();

    console.log(winningNumbers, bonusNumber);
  }
}

export default App;
