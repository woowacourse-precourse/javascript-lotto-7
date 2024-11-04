import { Console } from "@woowacourse/mission-utils";
import LotteryMachine from "./LotteryMachine.js";
import PrizeCalculator from "./PrizeCalculator.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    if (!purchaseAmount) return;

    const lotteryMachine = new LotteryMachine(purchaseAmount);
    const tickets = lotteryMachine.generateLottoTickets();

    this.printTickets(tickets);

    const winningNumbers = await this.getWinningNumbers();
    if (!winningNumbers) return;

    const bonusNumber = await this.getBonusNumber();
    if (bonusNumber === undefined) return;

    const prizeCalculator = new PrizeCalculator(
      tickets,
      winningNumbers,
      bonusNumber
    );
    this.printPrizeResults(prizeCalculator.calculatePrizes());
  }

  printTickets(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });
  }

  printPrizeResults(results) {
    results.forEach((result) => {
      Console.print(result);
    });
  }
}

export default App;
