import { MissionUtils } from "@woowacourse/mission-utils";
import { BUY_ERROR, BUY_STRING, ENTER } from "./Constant.js";
class App {
  async run() {
    const buyCount = await MissionUtils.Console.readLineAsync(
      BUY_STRING + ENTER
    );
    if (isNaN(buyCount) || buyCount <= 0 || buyCount % 1000 != 0) {
      throw new Error(BUY_ERROR + ENTER);
    }
  }
}

export default App;
