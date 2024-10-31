import { Console } from '@woowacourse/mission-utils';

class Input {
  static getPurchaseAmount() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static getWinningNumbers() {
    return Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  }
}

export default Input;
