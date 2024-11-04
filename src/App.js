import { Console } from '@woowacourse/mission-utils';
import InputHandler from './handlers/InputHandler.js';
import ResultPrinter from './handlers/ResultPrinter.js';
import LottoGenerator from './utils/LottoGenerator.js';
import ResultCalculator from './utils/ResultCalculator.js';

class App {
  async run() {
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    const lottoList = this.generateLottos(purchaseAmount);

    const { winningNumbers, bonusNumber } = await this.getWinningNumbers();

    const { money, matchTable } = this.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    ResultPrinter.printResults(matchTable, money, purchaseAmount);
  }

  generateLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottoList = LottoGenerator.generateLottos(lottoCount);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
    return lottoList;
  }

  async getWinningNumbers() {
    const winningNumbers = await InputHandler.getWinningNumbers();
    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);
    return { winningNumbers, bonusNumber };
  }

  calculateResults(lottoList, winningNumbers, bonusNumber) {
    return ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
  }
}

export default App;
