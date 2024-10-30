import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync('구입 금액을 입력해주세요.\n');

    return input;
  }
}
