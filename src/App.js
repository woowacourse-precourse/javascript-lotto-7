import { Console } from "@woowacourse/mission-utils";
import { getBonusNums, getPurchaseAmount, getWinningNums } from "./inputs.js";
import { generateLotto } from "./lottoutils.js";

class App {
  async run() {
    try {
      const purchaseAmount = await getPurchaseAmount();

      const tickets = generateLotto(purchaseAmount);

      const winningNums = await getWinningNums();
      const bonusNums = await getBonusNums();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
