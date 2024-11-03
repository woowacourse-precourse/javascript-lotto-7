import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MSG } from '../constants/messages.js';
import {
  validateBonusNumber,
  validatePurchaseAmount,
  validateWinningNumbers,
} from '../utils/LottoValidator.js';
import Output from './Output.js';

class Input {
  static async getPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          `${PROMPT_MSG.PURCHASE_AMOUNT}\n`,
        );
        validatePurchaseAmount(input);
        return input;
      } catch (error) {
        Output.displayError(error.message);
      }
    }
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          `\n${PROMPT_MSG.WINNING_NUMBERS}\n`,
        );
        validateWinningNumbers(input);
        return input;
      } catch (error) {
        Output.displayError(error.message);
      }
    }
  }

  static async getBonusNumber() {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          `\n${PROMPT_MSG.BONUS_NUMBER}\n`,
        );
        validateBonusNumber(input);
        return input;
      } catch (error) {
        Output.displayError(error.message);
      }
    }
  }
}

export default Input;
