import { Console } from "@woowacourse/mission-utils";
import { PROMPTS } from "./constants.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(PROMPTS.PURCHASE_AMOUNT);
    return purchaseAmount;
  }
}

export default App;
