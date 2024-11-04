import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BUY_STRING,
  ENTER,
  LOTTO_STRING,
  WINNING_LOTTO_STRING,
  BONUS_NUMBER_STRING,
} from "./Constant.js";
import {
  makeLottos,
  makeWinningLotto,
  buyCountErrorCheck,
  calculateLottos,
  printResult,
  printEarn,
} from "./Function.js";

class App {
  async run() {
    const buyCount = await MissionUtils.Console.readLineAsync(
      BUY_STRING + ENTER
    );
    buyCountErrorCheck(buyCount);

    const lottoCount = buyCount / 1000;
    MissionUtils.Console.print(ENTER + lottoCount + LOTTO_STRING);
    const lottos = makeLottos(lottoCount);

    const winningLottoString = await MissionUtils.Console.readLineAsync(
      ENTER + WINNING_LOTTO_STRING + ENTER
    );

    const winningLotto = makeWinningLotto(winningLottoString);
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      ENTER + BONUS_NUMBER_STRING + ENTER
    );
    winningLotto.bonusErrorCheck(bonusNumber);

    const equalCounts = calculateLottos(lottos, winningLotto, bonusNumber);
    printResult(equalCounts);
    printEarn(buyCount, equalCounts);
  }
}

export default App;
