import LottoChecker from './classes/LottoChecker.js';
import LottoInputReader from './classes/LottoInputReader.js';
import LottoIssuer from './classes/LottoIssuer.js';

class App {
  async run() {
    const lottoPurchaseAmount =
      await LottoInputReader.readLottoPurchaseAmount();
    const winningNumber = await LottoInputReader.readWinningNumbers();
    const bonusNumber = await LottoInputReader.readBonusNumber();
    const checker = new LottoChecker(winningNumber, bonusNumber);

    const lottoCount = LottoIssuer.calculateLottoCount(lottoPurchaseAmount);
    const lottos = LottoIssuer.generateLottos(lottoCount);

    const winningResult = checker.checkWinningLottos(lottos);
  }
}

export default App;
