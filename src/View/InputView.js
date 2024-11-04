import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGES } from '../constants/messages.js';

class InputView {
  async getAmount() {
    const amount = await Console.readLineAsync(PROMPT_MESSAGES.INPUT_AMOUNT);
    return Number(amount);
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      PROMPT_MESSAGES.INPUT_WINNING_NUMBERS
    );
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      PROMPT_MESSAGES.INPUT_BONUS_NUMBERS
    );
    return Number(bonusNumber);
  }
}

export default InputView;
