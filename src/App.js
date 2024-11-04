import { Console } from "@woowacourse/mission-utils";
import { getBonusNums, getPurchaseAmount, getWinningNums } from "./inputs.js";
import { calculateLottos, generateLotto, printTickets } from "./lottoutils.js";

class App {
  async run() {
    try {
      const purchaseAmount = await getPurchaseAmount();

      const tickets = generateLotto(purchaseAmount);
      printTickets(tickets);

      const winningNums = await getWinningNums();
      const bonusNums = await getBonusNums();

      Console.print(`${purchaseAmount}개를 구매했습니다.`);
      const result = calculateLottos(tickets, winningNums, bonusNums);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
