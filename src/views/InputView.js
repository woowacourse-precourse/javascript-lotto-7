import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/Constants.js";

class InputView {
  async inputMoney() {
    return Console.readLineAsync(MESSAGES.INPUT_PURCHASE_MONEY);
  }
  async inputNumbers() {
    return Console.readLineAsync(MESSAGES.INPUT_WINNING_NUMBERS);
  }
  async inputBonusNumber() {
    return Console.readLineAsync(MESSAGES.INPUT_BONUS_NUMBER);
  }
}

export default InputView;
