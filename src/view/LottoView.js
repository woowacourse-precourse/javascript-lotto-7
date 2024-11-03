import { Console } from "@woowacourse/mission-utils";
import { messages } from "../constants/input.js";

class LottoView {
  async inputLottoAmount() {
    const userInputAmounts = await Console.readLineAsync(
      messages.INPUT_PURCHASE_AMOUNT
    );
    return userInputAmounts;
  }
}

export default LottoView;
