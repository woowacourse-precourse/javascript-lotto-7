import LottoChecker from './classes/LottoChecker.js';
import LottoIssuer from './classes/LottoIssuer.js';
import LottoOutputWriter from './classes/LottoOutputWriter.js';
import LottoRevenueCalculator from './classes/LottoRevenueCalculator.js';
import LottoInputHandler from './handlers/LottoInputHandler.js';

class App {
  async run() {
    const lottoPurchaseAmount = await LottoInputHandler.handleLottoPurchaseAmount();
    const lottoCount = LottoIssuer.calculateLottoCount(lottoPurchaseAmount);
    const lottos = LottoIssuer.generateLottos(lottoCount);
    LottoOutputWriter.printLottos(lottos);

    const winningNumbers = await LottoInputHandler.handleWinningNumbers();
    const bonusNumber = await LottoInputHandler.handleBonusNumber();

    const winningResult = LottoChecker.checkWinningLottos(lottos, winningNumbers, bonusNumber);
    LottoOutputWriter.printWinningResults(winningResult);

    const totalYield = LottoRevenueCalculator.calculateYield(lottoPurchaseAmount, winningResult);
    LottoOutputWriter.printYield(totalYield);
  }
}

export default App;
