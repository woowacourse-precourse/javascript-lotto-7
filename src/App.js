// App.js
import { Console } from "@woowacourse/mission-utils";
import { PURCHASE_MESSAGE, LOTTO_MESSAGE } from "./constants.js";
import Purchase from "./Purchase.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const purchase = await this.getValidPurchase();
    purchase.generateAllRandomNumbers();
    this.displayPurchaseResults(purchase);

    const winningLotto = await this.getWinningLottoNumbers();
  }

  /**구입 금액 */
  async getValidPurchase() {
    while (true) {
      try {
        const cost = await Console.readLineAsync(PURCHASE_MESSAGE.INPUT_PURCHASE_COST);
        return new Purchase(cost);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }

  displayPurchaseResults(purchase) {
    const purchaseCount = purchase.getPurchaseCount();
    Console.print(`\n${purchaseCount}${PURCHASE_MESSAGE.PURCHASE_AMOUNT}`);

    purchase.getRandomNumbersList().forEach((numbers) => {
      Console.print(numbers);
    });
  }

  /** 로또 */
  async getWinningLottoNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_LOTTO_NUMBERS);
        const numbers = input.split(",").map(Number);
        return new Lotto(numbers);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }
}

export default App;