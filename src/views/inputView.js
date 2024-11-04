import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/constants.js";

const inputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    return input.trim();
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    return input.trim();
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return input.trim();
  },
};

export default inputView;
