import { Input } from './views/input.js';
import { Output } from './views/output.js';
import calculateStatistics from './utils/statistics.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const input = new Input();
    const output = new Output();

    try {
      let purchaseAmount;
      while (true) {
        try {
          purchaseAmount = await input.inputPurchaseAmount();
          break;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }

      const count = purchaseAmount / 1000;

      const purchaseNumbers = Lotto.generateLottoNumbers(count);
      output.showPurchaseNumbers(count, purchaseNumbers);

      let winningNumbers;
      while (true) {
        try {
          winningNumbers = await input.inputWinningNumbers();
          break;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }

      let bonusNumber;
      while (true) {
        try {
          bonusNumber = await input.inputBonusNumber(winningNumbers);
          break;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }

      const statistics = calculateStatistics(
        purchaseNumbers,
        winningNumbers,
        bonusNumber
      );

      this.displayResults(statistics, purchaseAmount, output);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  displayResults(statistics, purchaseAmount, output) {
    const totalWinnings = statistics.reduce(
      (total, stat) => total + stat.totalPrize,
      0
    );
    const yieldValue = (totalWinnings / purchaseAmount) * 100;
    output.printStatistics(statistics);
    output.printYield(yieldValue);
  }
}

export default App;
