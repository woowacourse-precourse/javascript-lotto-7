import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BUY_STRING,
  ENTER,
  LOTTO_STRING,
  WINNING_LOTTO_STRING,
  BONUS_NUMBER_STRING,
  MONEY_UNIT,
  FALSE,
  TRUE,
  ZERO,
} from "./Constant.js";
import { buyCountErrorCheck } from "./Function/buyCountErrorCheck.js";
import { makeWinningLotto } from "./Function/makeWinningLotto.js";
import { calculateLottos } from "./Function/calculateLottos.js";
import { makeLottos } from "./Function/makeLottos.js";
import { printEarn } from "./Function/printEarn.js";
import { printResult } from "./Function/printResult.js";
import { bonusErrorCheck } from "./Function/bonusErrorCheck.js";

class App {
  async run() {
    let valid = FALSE;
    let buyCount = ZERO;
    while (!valid) {
      try {
        buyCount = await MissionUtils.Console.readLineAsync(BUY_STRING + ENTER);
        buyCountErrorCheck(buyCount);
        valid = TRUE;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const lottoCount = buyCount / MONEY_UNIT;
    MissionUtils.Console.print(lottoCount + LOTTO_STRING);
    const lottos = makeLottos(lottoCount);

    valid = FALSE;
    let winningLotto;
    while (!valid) {
      try {
        const winningLottoString = await MissionUtils.Console.readLineAsync(ENTER + WINNING_LOTTO_STRING + ENTER);
        winningLotto = makeWinningLotto(winningLottoString);
        valid = TRUE;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    valid = FALSE;
    let bonusNumber;
    while (!valid) {
      try {
        bonusNumber = await MissionUtils.Console.readLineAsync(ENTER + BONUS_NUMBER_STRING + ENTER);
        bonusErrorCheck(bonusNumber);
        winningLotto.bonusDuplicateCheck(bonusNumber);
        valid = TRUE;
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
