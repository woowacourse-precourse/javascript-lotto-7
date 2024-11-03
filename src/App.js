// App.js
import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants.js";
import Purchase from "./Purchase.js";

class App {
  async run() {
    const purchase = await this.getValidPurchase();
  }

  async getValidPurchase() {
    while (true) {
      try {
        const amount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT_MESSAGE);
        return new Purchase(Number(amount));
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }
}

export default App;