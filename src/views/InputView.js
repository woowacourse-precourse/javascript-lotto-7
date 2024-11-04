import { Console } from "@woowacourse/mission-utils";
import { INPUT_CONSTANTS } from "../utils/constants/ViewConstants.js";

class InputView {
  static async inputPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_CONSTANTS.PURCHASE_AMOUNT);
    Console.print("");
    return input;
  }

  static async inputWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_CONSTANTS.WINNING_NUMBERS);
    Console.print("");
    return input;
  }

  static async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_CONSTANTS.BONUS_NUMBER);
    Console.print("");
    return input;
  }
}

export default InputView;
