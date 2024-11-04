import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constant/constant.js';

const InputView = {
  async inputAmount() {
    const purchaseAmount = await Console.readLineAsync(
      INPUT_MESSAGES.INPUT_PURCHASE_AMOUNT
    );
    return purchaseAmount;
  },

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGES.INPUT_WINNING_NUMBERS
    );
    return winningNumbers;
  },

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      INPUT_MESSAGES.INPUT_BONUS_NUMBER
    );
    return bonusNumber;
  },
};

export default InputView;
