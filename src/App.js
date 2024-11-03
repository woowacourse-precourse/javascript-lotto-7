import LottoChecker from './classes/LottoChecker.js';
import LottoInputReader from './classes/LottoInputReader.js';
import LottoIssuer from './classes/LottoIssuer.js';
import LottoOutputWriter from './classes/LottoOutputWriter.js';
import LottoRevenueCalculator from './classes/LottoRevenueCalculator.js';

class App {
  async run() {
    const lottoPurchaseAmount =
      await LottoInputReader.readLottoPurchaseAmount();
    const lottoCount = LottoIssuer.calculateLottoCount(lottoPurchaseAmount);
    const lottos = LottoIssuer.generateLottos(lottoCount);

    LottoOutputWriter.printLottos(lottos);

    const winningNumbers = await LottoInputReader.readWinningNumbers();
    const bonusNumber = await LottoInputReader.readBonusNumber();

    const winningResult = LottoChecker.checkWinningLottos(
      lottos,
      winningNumbers,
      bonusNumber
    );
    LottoOutputWriter.printWinningResults(winningResult);

    const totalYield = LottoRevenueCalculator.calculateYield(
      lottoPurchaseAmount,
      winningResult
    );
    LottoOutputWriter.printYield(totalYield);
  }
}

export default App;
