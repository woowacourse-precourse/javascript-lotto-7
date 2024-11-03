import { Console } from "@woowacourse/mission-utils";
import InputValue from "./InputValue.js";
import PurchaseMoney from "./PurchaseMoney.js";

class App {
  purchaseMoney;

  async run() {
    await this.inputPurchaseMoney();
  }

  async inputPurchaseMoney() {
    while (true) {
      try {
        this.purchaseMoney = await InputValue.purchaseMoney();
        new PurchaseMoney(this.purchaseMoney);
        return this.purchaseMoney;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}

export default App;
