import { Console } from "@woowacourse/mission-utils";
import Price from "./Price.js";

class App {
  async run() {
    const priceInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const price = new Price(priceInput);
    Console.print("price : "+ price.getPrice());
  }
}

export default App;
