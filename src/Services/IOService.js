// Services/IOService.js
import { getInput } from "../View/input.js";
import {
  printTicketCount,
  printLottoTickets,
  printWinningResult,
  printLottoYield,
} from "../View/output.js";

class IOService {
  async getUserInput(promptMessage) {
    return await getInput(promptMessage); // 사용자 입력을 받음
  }

  displayTicketCount(ticketCount) {
    printTicketCount(ticketCount); // 구입한 로또 티켓 수 출력
  }

  displayLottoTickets(tickets) {
    printLottoTickets(tickets); // 생성된 로또 티켓들 출력
  }

  displayWinningResult(winningResult) {
    printWinningResult(winningResult); // 당첨 결과 출력
  }

  displayLottoYield(yieldPercentage) {
    printLottoYield(yieldPercentage); // 수익률 출력
  }
}

export default IOService;
