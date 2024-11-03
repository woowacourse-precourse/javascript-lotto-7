import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
const VALID_LOTTERY_NUM = 6;

class InputHandler {
  static async getPurchasePrice() {
    return await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
  }

  static async getWinningNumbers() {
    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const winNumbersArray = winNumber.split(',').map(Number);
    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);

    return { winNumber, bonusNumber };
  }
}
export default InputHandler;
