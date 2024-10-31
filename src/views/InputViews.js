import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/Messages.js";

class InputView {
  static inputMoney() {
    return Console.readLineAsync(`${MESSAGES.INPUT_MONEY}\n`);
  }

  static inputWinningNumbers() {
    return Console.readLineAsync(`${MESSAGES.INPUT_WINNING_NUMBERS}\n`);
  }

  static inputBonusNumber() {
    return Console.readLineAsync(`${MESSAGES.INPUT_BONUS_NUMBER}\n`);
  }
}

export default InputView;
