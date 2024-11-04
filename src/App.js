import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BUY_STRING,
  ENTER,
  LOTTO_STRING,
  WINNING_LOTTO_STRING,
  BONUS_NUMBER_STRING,
  BUY_ERROR,
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
    let valid = false;
    let buyCount = 0;
    while (!valid) {
      try {
        buyCount = await MissionUtils.Console.readLineAsync(BUY_STRING + ENTER);
        buyCountErrorCheck(buyCount);
        valid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const lottoCount = buyCount / 1000;
    MissionUtils.Console.print(lottoCount + LOTTO_STRING);
    const lottos = makeLottos(lottoCount);

    valid = false;
    let winningLotto;
    while (!valid) {
      try {
        const winningLottoString = await MissionUtils.Console.readLineAsync(
          ENTER + WINNING_LOTTO_STRING + ENTER
        );
        winningLotto = makeWinningLotto(winningLottoString);
        valid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    valid = false;
    let bonusNumber;
    while (!valid) {
      try {
        bonusNumber = await MissionUtils.Console.readLineAsync(
          ENTER + BONUS_NUMBER_STRING + ENTER
        );
        winningLotto.bonusErrorCheck(bonusNumber);
        valid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const equalCounts = calculateLottos(lottos, winningLotto, bonusNumber);
    printResult(equalCounts);
    printEarn(buyCount, equalCounts);
  }
}

export default App;
