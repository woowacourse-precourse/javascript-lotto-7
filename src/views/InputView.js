import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/consoleMessage.js';

class InputView {
  async getPurchaseCost() {
    const input = await Console.readLineAsync(INPUT.PURCHASE_COST_PROMPT);
    return input;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync(INPUT.WINNING_NUMBERS_PROMPT);
    return input.split(',');
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync(INPUT.BONUS_NUMBER_PROMPT);
    return input;
  }
}
export default InputView;
