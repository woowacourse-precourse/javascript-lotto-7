import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGES } from '../constants/messages.js';

class InputView {
  async getInput() {
    return await Console.readLineAsync(PROMPT_MESSAGES.INPUT.PURCHACE_PRICE);
  }

  async getWinningNumber() {
    return await Console.readLineAsync(PROMPT_MESSAGES.INPUT.WINNING_NUMBER);
  }

  async getBonusNumber() {
    return await Console.readLineAsync(PROMPT_MESSAGES.INPUT.BONUS_NUMBER);
  }
}

export default InputView;
