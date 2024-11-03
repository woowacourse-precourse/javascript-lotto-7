import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/consoleMessage.js';

class InputView {
  async getPurchaseCost() {
    const input = await Console.readLineAsync(INPUT.PURCHASE_COST_PROMPT);
    return this.convertToNumberOrNull(input);
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync(INPUT.WINNING_NUMBERS_PROMPT);
    return input.split(',').map((number) => {
      const trimmedNumber = number.trim();
      return this.convertToNumberOrNull(trimmedNumber);
    });
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync(INPUT.BONUS_NUMBER_PROMPT);
    return this.convertToNumberOrNull(input);
  }

  convertToNumberOrNull(input) {
    if (input === '') {
      return null;
    }
    return Number(input);
  }
}
export default InputView;
