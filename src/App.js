import {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
} from "./UserIO/input.js";
import {
  displayTicketCount,
  displayLottoTickets,
  displayStatistics,
  displayError,
} from "./UserIO/output.js";
import Lotto from "./Lotto.js";
import { calculateStatistics, calculateProfitRate } from "./Logic/lottoUtil.js";

class App {
  async run() {
    try {
      const purchaseAmount = await getPurchaseAmount();
      const ticketCount = Math.floor(purchaseAmount / 1000);
      displayTicketCount(ticketCount);

      const purchasedLottos = Array.from(
        { length: ticketCount },
        () => new Lotto()
      );
      displayLottoTickets(purchasedLottos);

      const winningNumbers = await getWinningNumbers();
      const bonusNumber = await getBonusNumber();

      const matchCounts = calculateStatistics(
        purchasedLottos,
        winningNumbers,
        bonusNumber
      );
      const profitRate = calculateProfitRate(matchCounts, purchaseAmount);

      displayStatistics(matchCounts, profitRate);
    } catch (error) {
      displayError(error.message);
    }
  }
}

export default App;
