import { Console } from "@woowacourse/mission-utils";
import { getPurchaseAmount } from "./inputs.js";

class App {
  async run() {
    try {
      const purchaseAmount = await getPurchaseAmount();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
