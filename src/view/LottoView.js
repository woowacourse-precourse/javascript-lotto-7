import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";

class LottoView {
  async inputLottoAmount() {
    const userInputAmounts = await Console.readLineAsync(
      MESSAGES.INPUT_PURCHASE_AMOUNT
    );
    return userInputAmounts;
  }
}

export default LottoView;
