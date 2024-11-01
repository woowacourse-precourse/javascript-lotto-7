import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/constant.js";

class InputView {
  async inputPurchaseAmount() {
    return MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PROMPT_PURCHASE_AMOUNT
    );
  }
}

export default InputView;
