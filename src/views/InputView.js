import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync('구입 금액을 입력해주세요.\n');

    return input;
  }

  static async getWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    return input;
  }
}

export default InputView;
