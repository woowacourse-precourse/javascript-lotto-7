import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGES } from "./constants/message.js";
import { SPLITTER } from "./constants/validate.js";

class InputHandler {
  static async getPurchasePrice() {
    return await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
  }

  static async getWinNumbers() {
    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    return winNumber.split(SPLITTER).map(Number);
  }

  static async getBonusNumber() {
    return await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
  }
}
export default InputHandler;
