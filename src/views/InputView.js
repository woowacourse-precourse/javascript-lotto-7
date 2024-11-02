import { Console } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_PROMPT,
  PURCHASE_COST_PROMPT,
  WINNING_NUMBERS_PROMPT,
} from '../constants/consoleMessage';

class InputView {
  async getPurchaseCost() {
    const input = await Console.readLineAsync(PURCHASE_COST_PROMPT);
    return this.convertToNumberOrNull(input);
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync(WINNING_NUMBERS_PROMPT);
    return input.split(',').map((number) => {
      const trimmedNumber = number.trim();
      return this.convertToNumberOrNull(trimmedNumber);
    });
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync(BONUS_NUMBER_PROMPT);
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
