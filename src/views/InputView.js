import { Console } from '@woowacourse/mission-utils';

class InputView {
  static moneyInput() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static WinningInput() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  static bonusInput() {
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }
}

export default InputView;
