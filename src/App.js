import { Console } from "@woowacourse/mission-utils";
import { getTicketCount, getWinningNumbers, getBonusNumber } from "./utils/InputHandler.js";
import { generateTickets } from "./utils/TicketUtils.js";
import { countPrizeResults, showStatistics} from "./utils/ResultUtils.js"

class App {
  async run() {
    try {
      // 구입금액 입력받음
      const ticketCount = await getTicketCount();

      // 티켓 생성
      Console.print(`\n${ticketCount}개를 구매했습니다.`);

      const tickets = generateTickets(ticketCount);
      tickets.forEach(ticket => {
        Console.print(`[${ticket.join(", ")}]`);
      });

      // 당첨번호, 보너스 번호 입력받음
      const winningNumbers = await getWinningNumbers();
      const bonusNumber = await getBonusNumber(winningNumbers);

      // 당첨 통계 계산, 출력
      const prizeResults = countPrizeResults(tickets, winningNumbers, bonusNumber);
      showStatistics(prizeResults, ticketCount)
    } catch (error) {
      // throw error;
      Console.print(`${error.message}`); 
      return;
    }
  }
}

export default App;

