import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoGame from "../LottoGame.js";

class LottoController {
  async start() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();
      const lottoGame = new LottoGame(purchaseAmount);
      OutputView.printLottoTickets(lottoGame.lottoTickets);

      const winningNumbers = await InputView.getWinningNumbers();
      const bonusNumber = await InputView.getBonusNumber();

      const ranks = lottoGame.calculateRanks(winningNumbers, bonusNumber);
      const earningRate = this.calculateEarningRate(ranks, purchaseAmount);

      OutputView.printResults(ranks, earningRate);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default LottoController;