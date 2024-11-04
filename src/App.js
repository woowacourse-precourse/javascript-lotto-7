import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BUY_STRING,
  ENTER,
  LOTTO_STRING,
  WINNING_LOTTO_STRING,
  BONUS_NUMBER_STRING,
  MONEY_UNIT,
  ZERO,
} from "./Constant.js";
import { isValidBuyCount } from "./Function/isValidBuyCount.js";
import { makeWinningLotto } from "./Function/makeWinningLotto.js";
import { calculateEquals } from "./Function/calculateEquals.js";
import { makeLottos } from "./Function/makeLottos.js";
import { printEarn } from "./Function/printEarn.js";
import { printResult } from "./Function/printResult.js";
import { isValidBonus } from "./Function/isValidBonus.js";

class App {
  async run() {
    let buyCount = ZERO;
    while (buyCount == ZERO) {
      buyCount = await this.inputBuyCount();
    }

    const lottoCount = buyCount / MONEY_UNIT;
    MissionUtils.Console.print(ENTER + lottoCount + LOTTO_STRING);
    const lottos = makeLottos(lottoCount);

    await this.calculateLotto(buyCount, lottos);
  }

  async inputBuyCount() {
    try {
      let buyCount = await MissionUtils.Console.readLineAsync(BUY_STRING + ENTER);

      isValidBuyCount(buyCount);

      return buyCount;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return ZERO;
    }
  }

  async calculateLotto(buyCount, lottos) {
    let winningLotto = ZERO;
    while (winningLotto == ZERO) {
      winningLotto = await this.inputWinningLotto();
    }

    let bonusNumber = ZERO;
    while (bonusNumber == ZERO) {
      bonusNumber = await this.inputBonusNumber(winningLotto);
    }

    const equalCounts = calculateEquals(lottos, winningLotto, bonusNumber);
    printResult(equalCounts);
    printEarn(buyCount, equalCounts);
  }

  async inputWinningLotto() {
    try {
      const winningLottoString = await MissionUtils.Console.readLineAsync(ENTER + WINNING_LOTTO_STRING + ENTER);

      const winningLotto = makeWinningLotto(winningLottoString);

      return winningLotto;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return ZERO;
    }
  }

  async inputBonusNumber(winningLotto) {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(ENTER + BONUS_NUMBER_STRING + ENTER);

      isValidBonus(bonusNumber);
      winningLotto.bonusDuplicateCheck(bonusNumber);

      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return ZERO;
    }
  }
}

export default App;
