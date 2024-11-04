import { Console } from "@woowacourse/mission-utils";

class App {
  run() {
    this.inputPurchaseAmount();
  }

  async inputPurchaseAmount() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    Console.print(amount);
  }
}

export default App;
