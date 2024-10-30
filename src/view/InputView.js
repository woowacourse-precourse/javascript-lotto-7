import { Console } from '@woowacourse/mission-utils';

class InputView {
  static INPUT_MESSAGE = Object.freeze({
    SET_MONEY: '구입금액을 입력해 주세요.\n',
  });

  static async readMoney() {
    const money = await Console.readLineAsync(this.INPUT_MESSAGE.SET_MONEY);

    return money;
  }
}

export default InputView;
