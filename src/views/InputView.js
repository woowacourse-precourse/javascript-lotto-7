import { Console } from "@woowacourse/mission-utils";
import { UI_MESSAGES, ERROR_MESSAGES } from "../utils/constants.js";

export default class InputView {
  static async requestPurchaseAmount() {
    const input = await Console.readLineAsync(UI_MESSAGES.INPUT.PURCHASE_AMOUNT);
    if (!input) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    return input.trim();
  }

  static async requestWinningNumbers() {
    const input = await Console.readLineAsync(UI_MESSAGES.INPUT.WINNING_NUMBERS);
    if (!input) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    return input.trim();
  }

  static async requestBonusNumber() {
    const input = await Console.readLineAsync(UI_MESSAGES.INPUT.BONUS_NUMBER);
    if (!input) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    return input.trim();
  }
}