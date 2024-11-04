import { Console } from '@woowacourse/mission-utils';
import InputHandler from './handlers/InputHandler.js';
import ResultPrinter from './handlers/ResultPrinter.js';
import LottoGenerator from './utils/LottoGenerator.js';
import ResultCalculator from './utils/ResultCalculator.js';

class App {
  async run() {
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const lottoList = LottoGenerator.generateLottos(lottoCount);

    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );

    const winningNumbers = await InputHandler.getWinningNumbers();
    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);

    const { money, matchTable } = ResultCalculator.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );
    ResultPrinter.printResults(matchTable, money, purchaseAmount);
  }
}

export default App;
