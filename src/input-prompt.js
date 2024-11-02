import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export default class InputPrompt {
  static getPurchaseAmount() {
    return Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
  }

  static getWinningNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBER);
  }
  static getBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}
