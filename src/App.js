import LottoService from './services/LottoService.js';
import GameService from './services/GameService.js';
import ResultPrinter from './handlers/ResultPrinter.js';

class App {
  async run() {
    const { lottoList, purchaseAmount } = await LottoService.setupLottoGame();
    const { winningNumbers, bonusNumber } =
      await GameService.getWinningNumbers();
    const { money, matchTable } = GameService.calculateResults(
      lottoList,
      winningNumbers,
      bonusNumber,
    );

    ResultPrinter.printResults(matchTable, money, purchaseAmount);
  }
}

export default App;
