import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../Constants/Message.js';

class Input {
  async purchaseMoney() {
    const purchaseMoneyInput = await Console.readLineAsync(INPUT.purchaseMoney);

    return purchaseMoneyInput.trim();
  }

  async winningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      INPUT.winningNumber
    );

    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    const bonusNumbersInput = await Console.readLineAsync(INPUT.bonusNumber);

    return bonusNumbersInput.trim();
  }
}
export default Input;
