import { Console } from '@woowacourse/mission-utils';
import LottoChecker from './classes/LottoChecker.js';
import LottoInputReader from './classes/LottoInputReader.js';
import LottoIssuer from './classes/LottoIssuer.js';
import LottoOutputWriter from './classes/LottoOutputWriter.js';
import LottoRevenueCalculator from './classes/LottoRevenueCalculator.js';

class App {
  async run() {
    let lottoPurchaseAmount;

    while (true) {
      try {
        lottoPurchaseAmount = await LottoInputReader.readLottoPurchaseAmount();
        break;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }

    const lottoCount = LottoIssuer.calculateLottoCount(lottoPurchaseAmount);
    const lottos = LottoIssuer.generateLottos(lottoCount);

    LottoOutputWriter.printLottos(lottos);

    let winningNumbers, bonusNumber;

    while (true) {
      try {
        winningNumbers = await LottoInputReader.readWinningNumbers();
        break;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }

    while (true) {
      try {
        bonusNumber = await LottoInputReader.readBonusNumber();
        break;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }

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
