import { Console } from "@woowacourse/mission-utils";
import Input from "./Input.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import Output from "./Output.js";
import TicketsGenerator from "./TicketsGenerator.js";

class App {
  async run() {
    const ticketCount = await Input.inputPurchaseAmount();
    Output.printTicketCount(ticketCount);

    const ticketsGenerator = new TicketsGenerator(ticketCount);
    ticketsGenerator.showTickets();
    const tickets = ticketsGenerator.tickets;
    Console.print(tickets);

    const winningNumbers = await Input.inputWinningNumbers();
    const bonusNumber = await Input.inputBonusNumber(winningNumbers);

    const lottoResult = new LottoResult(winningNumbers, bonusNumber, tickets);
  }
}

export default App;
