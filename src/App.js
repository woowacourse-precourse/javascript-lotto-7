import { Console } from "@woowacourse/mission-utils";
import { getTicketCount, getWinningNumbers, getBonusNumber } from "./utils/InputHandler.js";
import { generateTickets } from "./utils/TicketUtils.js";
import { countPrizeResults, showStatistics} from "./utils/ResultUtils.js"

class App {
  async run() {
    try {
      const ticketCount = await getTicketCount();
      Console.print(`\n${ticketCount}개를 구매했습니다.`);

      const tickets = generateTickets(ticketCount);
      tickets.forEach(ticket => {
        Console.print(`[${ticket.join(", ")}]`);
      });

      const winningNumbers = await getWinningNumbers();
      const bonusNumber = await getBonusNumber(winningNumbers);

      const prizeResults = countPrizeResults(tickets, winningNumbers, bonusNumber);
      showStatistics(prizeResults, ticketCount)
    } catch (error) {
      Console.print(`${error.message}`); 
    }
  }
}

export default App;

