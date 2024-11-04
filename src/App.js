import LottoController from './controllers/LottoController.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    try {
      const purchaseAmount = await LottoController.handlePurchaseAmount();
      const lottoTickets = LottoController.issueLottoTickets(purchaseAmount);

      const { winningLotto, bonusNumber } =
        await LottoController.getWinningAndBonusNumbers();

      LottoController.displayResults(
        lottoTickets,
        winningLotto,
        bonusNumber,
        purchaseAmount,
      );
    } catch (error) {
      OutputView.printError(error.message, error.name);
      throw error;
    }
  }
}

export default App;
