import { INPUT_MESSAGE } from "../constants/messages.js";
import { readUserInput } from "../utils/util.js";

class InputView {
  static async getLottoAmount() {
    return readUserInput(INPUT_MESSAGE.PURCHASE_AMOUNT);
  }

  static async getWinningNumbers() {
    return readUserInput(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  static async getBonusNumber() {
    return readUserInput(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default InputView;
