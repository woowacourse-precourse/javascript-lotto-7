import { Console } from '@woowacourse/mission-utils';

class InputView {
  static INPUT_MESSAGE = Object.freeze({
    SET_MONEY: '\n구입금액을 입력해 주세요.\n',
    SET_WINNING_NUM: '\n당첨 번호를 입력해 주세요.\n',
    SET_BONUS_NUM: '\n보너스 번호를 입력해 주세요.\n',
  });

  static async readMoney() {
    const money = await Console.readLineAsync(this.INPUT_MESSAGE.SET_MONEY);

    return money;
  }

  static async readWinningNumber() {
    const winningNumber = await Console.readLineAsync(this.INPUT_MESSAGE.SET_WINNING_NUM);

    return winningNumber;
  }

  static async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(this.INPUT_MESSAGE.SET_BONUS_NUM);

    return bonusNumber;
  }
}

export default InputView;
