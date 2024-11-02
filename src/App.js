import { Console } from "@woowacourse/mission-utils";
import { PROMPTS, ERROR_MESSAGES } from "./constants/constants.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(PROMPTS.PURCHASE_AMOUNT);

    if (isNaN(purchaseAmount)) {
      Console.print(ERROR_MESSAGES.INVALID_AMOUNT);
      return this.getPurchaseAmount();
    }

    if (Number(purchaseAmount) % 1000 !== 0) {
      Console.print(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
      return this.getPurchaseAmount();
    }

    return purchaseAmount;
  }
}

export default App;
