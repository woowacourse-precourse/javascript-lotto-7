import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BUY_ERROR,
  BUY_STRING,
  ENTER,
  LOTTO_STRING,
  WINNING_LOTTO_STRING,
} from "./Constant.js";
import { makeLottos, makeWinningLotto } from "./Function.js";

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

    const winningLottoString = await MissionUtils.Console.readLineAsync(
      ENTER + WINNING_LOTTO_STRING + ENTER
    );
    const winningLotto = makeWinningLotto(winningLottoString);
  }
}

export default App;
