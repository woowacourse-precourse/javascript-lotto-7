import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputView {
  static async askPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT_PROMPT);
  }

  static async askWinningNumbers() {
    Console.print('');
    const input = await Console.readLineAsync(MESSAGES.WINNING_NUMBERS_PROMPT);
    return input
      .split(',')
      .map((num) => num.trim())
      .filter((num) => num !== '')
      .map((num) => Number(num));
  }

  static async askBonusNumber() {
    Console.print('');
    const input = await Console.readLineAsync(MESSAGES.BONUS_NUMBER_PROMPT);
    // 입력값이 비어있거나 공백일 경우 빈 문자열 반환
    return input.trim() === '' ? '' : Number(input);
  }
}

export default InputView;
