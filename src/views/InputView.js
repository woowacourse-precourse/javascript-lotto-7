import { Console } from "@woowacourse/mission-utils";
import { INPUT_CONSTANTS } from "../utils/ViewConstants.js";

class InputView {
  static async inputPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_CONSTANTS.PURCHASE_AMOUNT);
    return input;
  }

  static async inputWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_CONSTANTS.WINNING_NUMBERS);
    return input;
  }

  static async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_CONSTANTS.BONUS_NUMBER);
    return input;
  }
}

export default InputView;
