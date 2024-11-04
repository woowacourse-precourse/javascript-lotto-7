import { Console } from "@woowacourse/mission-utils";
import LotteryMachine from "./LotteryMachine.js";
import PrizeCalculator from "./PrizeCalculator.js";

class App {
  async run() {
    try {
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
    } catch (error) {
      Console.print(error.message);
    }
  }

  // 기타 메서드 생략...
}

// `Console.readLineAsync` 메서드 구현
Console.readLineAsync = function (question) {
  return new Promise((resolve) => {
    Console.readLine(question, (input) => {
      resolve(input);
    });
  });
};

export default App;
