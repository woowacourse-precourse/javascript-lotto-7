import LottoInput from './LottoInput.js';
import LottoTickets from './LottoTicket.js';
import Lotto from './Lotto.js';
import EarningsCalculator from './pricing.js';
import { PRICE_PROMPT, RESULT_PROMPT } from './Prompt.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const purchaseAmount = await LottoInput.getPurchaseAmount();
      const ticketCount = Math.floor(purchaseAmount / 1000);
      Console.print(PRICE_PROMPT.getPriceResultPrompt(ticketCount));

      const tickets = LottoTickets(ticketCount);
      tickets.forEach(ticket => Console.print(`[${ticket.getNumbers().join(', ')}]`));

      const { winningNumbers, bonusNumber } = await LottoInput.getWinningNumbers();
      const { winnings, totalWinnings } = Lotto.calculateResults(tickets, winningNumbers, bonusNumber);

      RESULT_PROMPT.displayResults(winnings);

      const earningsCalculator = new EarningsCalculator(purchaseAmount, totalWinnings);
      const earningsRate = earningsCalculator.calculateRate();
      Console.print(RESULT_PROMPT.getEarningsRatePrompt(earningsRate));

    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
