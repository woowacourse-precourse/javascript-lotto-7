import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputView {
  static async askPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT_PROMPT);
  }

  static async askWinningNumbers() {
    Console.print('');
    const input = await Console.readLineAsync(MESSAGES.WINNING_NUMBERS_PROMPT);
    return InputView.parseWinningNumbers(input);
  }

  static parseWinningNumbers(input) {
    const numbers = InputView.splitAndTrim(input);
    return InputView.convertToNumbers(numbers);
  }

  static async askBonusNumber() {
    Console.print('');
    const input = await Console.readLineAsync(MESSAGES.BONUS_NUMBER_PROMPT);
    return InputView.parseBonusNumber(input);
  }

  static parseBonusNumber(input) {
    const trimmedInput = input.trim();
    if (trimmedInput === '') {
      return '';
    }
    return Number(trimmedInput);
  }

  static splitAndTrim(input) {
    return input
      .split(',')
      .map((num) => num.trim())
      .filter((num) => num !== '');
  }

  static convertToNumbers(array) {
    return array.map((num) => Number(num));
  }
}

export default InputView;
