import { Console } from "@woowacourse/mission-utils";
import { getPurchaseAmount, getWinningNums } from "./inputs.js";

class App {
  async run() {
    try {
      const purchaseAmount = await getPurchaseAmount();
      const winningNums = await getWinningNums();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
