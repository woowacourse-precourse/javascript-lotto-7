// App.js
import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants.js";
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
        const amount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT_MESSAGE);
        return new Purchase(amount);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }

  displayPurchaseResults(purchase) {
    const purchaseCount = purchase.getPurchaseCount();
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);

    purchase.getRandomNumbersList().forEach((numbers) => {
      Console.print(numbers);
    });
  }
}

export default App;