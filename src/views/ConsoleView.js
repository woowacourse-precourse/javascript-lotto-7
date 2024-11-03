import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGE } from "../constants/runMessages.js";

class ConsoleView {
  async getPurchaseAmount() {
    return await Console.readLineAsync(RUN_MESSAGE.PURCHASE_AMOUNT);
  }

  async getWinningNumbers() {
    return await Console.readLineAsync(RUN_MESSAGE.WINNING_NUMBERS);
  }
}

export default ConsoleView;
