import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/Message.js';
import InputHandler from '../controller/InputHandler.js';

class UserInput {
  inputHandler;

  constructor() {
    this.inputHandler = new InputHandler();
  }

  async inputPurchaseAmount() {
    try {
      const input = await Console.readLineAsync(
        `${PROGRESS_MESSAGE.ENTER_PURCHASE_AMOUNT}\n`
      );
      const purchaseAmount = this.inputHandler.getValidatedPurchseAmount(input);

      return purchaseAmount;
    } catch (error) {
      Console.print(error.message + '\n');
      return this.inputPurchaseAmount();
    }
  }
  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        `\n${PROGRESS_MESSAGE.ENTER_WINNING_NUMBERS}\n`
      );
      const winningNumbers =
        this.inputHandler.getValidatedWinningNumbers(input);

      return winningNumbers;
    } catch (error) {
      Console.print(error.message + '\n');
      return this.inputWinningNumbers();
    }
  }
  async inputBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(
        `\n${PROGRESS_MESSAGE.ENTER_BONUS_NUMBER}\n`
      );
      const bonusNumber = this.inputHandler.getValidatedBonusNumber(
        input,
        winningNumbers
      );

      return bonusNumber;
    } catch (error) {
      Console.print(error.message + '\n');
      return this.inputBonusNumber(winningNumbers);
    }
  }
}

export default UserInput;
