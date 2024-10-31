import { Console } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import { Price } from "./lotto/index.js";

class App {
  async run() {
    const io = new IOHandler(Console);
    const price = await io.retryUntilValid(io.getLottoPrice, (price) => new Price(price));
  }
}

export default App;
