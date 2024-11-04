import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/IOMessages.js';

class InputView {
  /**
   * 구입 금액을 입력받는다.
   * @returns {Promise<string>} 입력된 구입 금액
   */
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.purchase_amount);

    return input;
  }

  /**
   * 당첨 번호를 입력받는다.
   * @returns {Promise<string>} 입력된 당첨 번호
   */
  static async getWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.winning_numbers);

    return input;
  }

  /**
   * 보너스 번호를 입력받는다.
   * @returns {Promise<string>} 입력된 보너스 번호
   */
  static async getBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.bonus_number);

    return input;
  }
}

export default InputView;
