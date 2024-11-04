import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const PRICE = await funcLoop("구입금액을 입력해 주세요.\n", Lotto.checkMoney);
  }
}

async function funcLoop(getInput, callback) {
  while (true) {
    try {
      let input = await MissionUtils.Console.readLineAsync(getInput);
      const RESULT = callback(input);
      return RESULT;
    } catch (error) {
      MissionUtils.Console.print(error);
    }
  }
}

export default App;