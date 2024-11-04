import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../utils/InputValidator.js';
import IO_MESSAGES from '../constants/ioMessages.js';

class InputHandler {
  static async getPurchaseAmount() {
    while (true) {
      try {
        const amount = Number(
          await Console.readLineAsync(IO_MESSAGES.PURCHASE_AMOUNT),
        );
        InputValidator.validatePurchaseAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(IO_MESSAGES.WINNING_NUMBERS);
        const numbers = input.split(',').map(Number);
        InputValidator.validateWinningNumbers(numbers);
        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const number = Number(
          await Console.readLineAsync(IO_MESSAGES.BONUS_NUMBER),
        );
        InputValidator.validateBonusNumber(number, winningNumbers);
        return number;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default InputHandler;
