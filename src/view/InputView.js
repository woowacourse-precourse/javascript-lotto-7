import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = Object.freeze({
  MONEY: '구입금액을 입력해주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

class InputView {
  static readMoney() {
    return Console.readLineAsync(INPUT_MESSAGE.MONEY);
  }

  static readWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  static readBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default InputView;
