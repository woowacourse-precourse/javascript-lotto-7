import { Console } from "@woowacourse/mission-utils";
import { INPUT_PROMPT } from "../constants/Message";

class InputView {
  static enterPurchaseMoney() {
    return Console.readLineAsync(INPUT_PROMPT.PURCHASE_MONEY);
  }

  static enterWinningNumbers() {
    return Console.readLineAsync(INPUT_PROMPT.WINNING_NUMBER);
  }

  static enterBonusNumber() {
    return Console.readLineAsync(INPUT_PROMPT.BONUS_NUMBER);
  }
}

export default InputView;
