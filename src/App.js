import { Console } from "@woowacourse/mission-utils";
import PurchaseAmount from "./PurchaseAmount.js";

class App {
  async run() {
    const amount = await this.getPurchasedAmount();
    console.log(`로또 ${amount}장을 구매했습니다.`);
  }

  async getPurchasedAmount() {
    try{
      const input = await Console.readLineAsync("구매 금액을 입력해 주세요.\n")
      const amount = new PurchaseAmount(Number(input));
      return amount.getAmount();
    }
    catch (error) {
      Console.error(error.message);
      await this.getPurchasedAmount();
    }
  }
}

export default App;
