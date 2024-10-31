import { Console } from '@woowacourse/mission-utils';

class InputView {
  static getBuyLottoCount() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static getPickLottoNumber() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  static getBonusLottoNumber() {
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }
}

export default InputView;
