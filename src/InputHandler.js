import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGES } from './constants/message.js';
import { SPLITTER } from './constants/validate.js';

class InputHandler {
  static async getPurchasePrice() {
    const purchasePrice = await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
    return purchasePrice;
  }

  static async getWinNumbers() {
    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const winNumberArray = winNumber.split(SPLITTER).map(Number);
    return winNumberArray;
  }

  static async getBonusNumber() {
    const bonusNum = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
    return bonusNum;
  }
}
export default InputHandler;
