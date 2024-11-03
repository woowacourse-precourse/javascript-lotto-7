import { Console } from '@woowacourse/mission-utils';

class Input {
  static async getPurchaseMoney() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static async getLottoWinningNumbers() {
    return await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  }

  static async getBonusNumber() {
    return await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  }
}

export default Input;
