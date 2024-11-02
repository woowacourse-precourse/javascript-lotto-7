import { Console } from "@woowacourse/mission-utils";
import { INPUT_PURCHASE_AMOUNT } from "../constants/input.js";

class LottoView {
  async inputLottoAmount() {
    const userInputAmounts = await Console.readLineAsync(INPUT_PURCHASE_AMOUNT);
    return userInputAmounts;
  }
}

export default LottoView;
