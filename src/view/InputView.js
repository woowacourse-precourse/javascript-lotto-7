import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/constant.js";

class InputView {
  async inputPurchaseAmount() {
    return MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PROMPT_PURCHASE_AMOUNT
    );
  }

  async inputLottoWinningNumber() {
    return MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PROMPT_WINNING_NUMBER
    );
  }

  async inputLottoBonuseNumber() {
    return MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PEOMPR_BONUS_NUMBER
    );
  }
}

export default InputView;
