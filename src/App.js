import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants.js";

class App {
  async run() {
    const amount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT_MESSAGE);
  }
}

export default App;
