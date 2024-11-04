// App.js
import { Console } from "@woowacourse/mission-utils";
import { PURCHASE_MESSAGE } from "./constants.js";
import Purchase from "./Purchase.js";

class App {
  async run() {
    const purchase = await this.getValidPurchase();
    purchase.generateAllRandomNumbers();
    this.displayPurchaseResults(purchase);
  }

  async getValidPurchase() {
    while (true) {
      try {
        const cost = await Console.readLineAsync(PURCHASE_MESSAGE.PURCHASE_COST_MESSAGE);
        return new Purchase(cost);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }

  displayPurchaseResults(purchase) {
    const purchaseCount = purchase.getPurchaseCount();
    Console.print(`\n${purchaseCount}${PURCHASE_MESSAGE.PURCHASE_AMOUNT_MESSAGE}`);

    purchase.getRandomNumbersList().forEach((numbers) => {
      Console.print(numbers);
    });
  }
}

export default App;