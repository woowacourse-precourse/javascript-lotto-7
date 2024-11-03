import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import Logic from './Logic.js';
import Lotto from './Lotto.js';

class Input {
  static async getPurchaseAmount() {
    let input = '';
    while (true) {
      try {
        input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        if (!Validation.validatePurchaseAmount(input)) {
          throw new Error('[ERROR] 구입금액은 1,000원 단위여야 합니다.');
        }
        return Number(input);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  static async getWinningNumbers() {
    let input = '';
    while (true) {
      try {
        input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
        if (!Validation.validateWinningNumbers(input)) {
          throw new Error(
            '[ERROR] 당첨 번호는 6개의 숫자와 쉼표로 이루어져야 하며, 각각의 숫자는 중복되지 않는 1~45 사이의 숫자여야 합니다.'
          );
        }
        return new Lotto(Logic.parseWinningNumbers(input));
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  static async getBonusNumber(lotto) {
    let input = '';
    while (true) {
      try {
        input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        if (!Validation.validateBonusNumber(lotto, input)) {
          throw new Error(
            '[ERROR] 보너스 번호는 1~45 사이의 숫자이고 당첨 번호와 중복되지 않아야 합니다.'
          );
        }
        return Number(input);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}
export default Input;
