import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MSG } from '../constants/messages.js';

class Input {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync(
      `${PROMPT_MSG.PURCHASE_AMOUNT}\n`,
    );
    return input;
  }

  static async getWinningNumbers() {
    const input = await Console.readLineAsync(
      `\n${PROMPT_MSG.WINNING_NUMBERS}\n`,
    );
    return input;
  }

  static async getBonusNumber() {
    const input = await Console.readLineAsync(`\n${PROMPT_MSG.BONUS_NUMBER}\n`);
    return input;
  }
}

export default Input;
