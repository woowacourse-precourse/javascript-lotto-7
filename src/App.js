import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import LottoService from './services/LottoService.js';

class App {
  async run() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    const ticketCount = Math.floor(purchaseAmount / 1000);
    const lottos = Array.from({ length: ticketCount }, () => LottoService.generateLotto());

    OutputView.displayLottoCount(ticketCount);
    OutputView.displayLottoNumbers(lottos);

    const winningNumbers = await InputView.getWinningNumbers();
    const bonusNumber = await InputView.getBonusNumber();

    const results = LottoService.checkWinning(lottos, winningNumbers, bonusNumber);
    const summary = results.reduce((acc, result) => {
      if (result) acc[result] = (acc[result] || 0) + 1;
      return acc;
    }, {});

    OutputView.displayWinningStatistics(summary);

    const totalPrize = LottoService.calculateTotalPrize(summary);
    const yieldRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    OutputView.displayYield(yieldRate);
  }
}

export default App;

