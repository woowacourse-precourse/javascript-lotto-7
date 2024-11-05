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
    return await getInput(promptMessage);
  }

  displayTicketCount(ticketCount) {
    printTicketCount(ticketCount);
  }

  displayLottoTickets(tickets) {
    printLottoTickets(tickets);
  }

  displayWinningResult(winningResult) {
    printWinningResult(winningResult);
  }

  displayLottoYield(yieldPercentage) {
    printLottoYield(yieldPercentage);
  }
}

export default IOService;
