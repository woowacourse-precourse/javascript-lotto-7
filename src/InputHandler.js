import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './lib/constant.js';

class InputHandler {
  async getBuyPrice() {
    const buyPrice = await Console.readLineAsync(INPUT_MESSAGE.BUY_PRICE);
    return buyPrice;
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBERS,
    );
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return bonusNumber;
  }
}

export default InputHandler;
