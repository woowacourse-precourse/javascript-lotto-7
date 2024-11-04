import { MissionUtils } from "@woowacourse/mission-utils";
import { BUY_ERROR, BUY_STRING, ENTER, LOTTO_STRING } from "./Constant.js";
import { makeLottos } from "./Function.js";

class App {
  async run() {
    const buyCount = await MissionUtils.Console.readLineAsync(
      BUY_STRING + ENTER
    );
    if (isNaN(buyCount) || buyCount <= 0 || buyCount % 1000 != 0) {
      throw new Error(BUY_ERROR + ENTER);
    }

    const lottoCount = buyCount / 1000;
    MissionUtils.Console.print(ENTER + lottoCount + LOTTO_STRING);
    const lottos = makeLottos(lottoCount);
  }
}

export default App;
