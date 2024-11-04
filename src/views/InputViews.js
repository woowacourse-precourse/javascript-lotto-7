import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

class InputView {
  static inputMoney() {
    return Console.readLineAsync(`${MESSAGES.INPUT_MONEY}`);
  }

  static inputWinningNumbers() {
    return Console.readLineAsync(`\n${MESSAGES.INPUT_WINNING_NUMBERS}`);
  }

  static inputBonusNumber() {
    return Console.readLineAsync(`\n${MESSAGES.INPUT_BONUS_NUMBER}`);
  }
}

export default InputView;
