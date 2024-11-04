import { Console } from "@woowacourse/mission-utils";
import purchaseAmount from "./util/purchaseAmount.js";
class App {
  async run() {
    const amount = await purchaseAmount();
    Console.print(`구입량: ${amount}`);
  }
}

export default App;
