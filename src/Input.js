import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import Logic from './Logic.js';
import Lotto from './Lotto.js';
import { ErrorMessage } from './Enum.js';

class Input {
  static async getPurchaseAmount() {
    let input = '';
    while (true) {
      try {
        input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        if (!Validation.validatePurchaseAmount(input)) {
          throw new Error('[ERROR]');
        }
        return Number(input);
      } catch (e) {
        Console.print(e.message + ErrorMessage.PUR_AMOUNT_ERROR);
      }
    }
  }

  static async getWinningNumbers() {
    let input = '';
    while (true) {
      try {
        input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
        if (!Validation.validateWinningNumbers(input)) {
          throw new Error('[ERROR]');
        }
        return new Lotto(Logic.parseWinningNumbers(input));
      } catch (e) {
        Console.print(e.message + ErrorMessage.WIN_NUM_ERROR);
      }
    }
  }

  static async getBonusNumber(lotto) {
    let input = '';
    while (true) {
      try {
        input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        if (!Validation.validateBonusNumber(lotto, input)) {
          throw new Error('[ERROR]');
        }
        return Number(input);
      } catch (e) {
        Console.print(e.message + ErrorMessage.BONUS_NUM_ERROR);
      }
    }
  }
}
export default Input;
