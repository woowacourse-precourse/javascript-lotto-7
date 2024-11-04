import { Console } from "@woowacourse/mission-utils";
import inputUtils from "./inputs";
import lottoUtils from "./lottoutils";

class App {
  async run() {
    try {
      const purchaseAmount = await inputUtils.getPurchaseAmount();

      const tickets = lottoUtils.generateLotto(purchaseAmount);
      lottoUtils.printTickets(tickets);

      const winningNums = await inputUtils.getWinningNums();
      const bonusNums = await inputUtils.getBonusNums();

      Console.print(`${purchaseAmount}개를 구매했습니다.`);
      const result = lottoUtils.calculateLottos(
        tickets,
        winningNums,
        bonusNums
      );
      lottoUtils.printResult(result, purchaseAmount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
