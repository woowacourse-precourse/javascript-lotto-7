import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  #MESSAGE = Object.freeze({
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  });

  async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync(this.#MESSAGE.PURCHASE_AMOUNT);
    return input;
  }

  async readWinningNumbers() {
    const input = await Console.readLineAsync(this.#MESSAGE.WINNING_NUMBERS);
    return input;
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync(this.#MESSAGE.BONUS_NUMBER);
    return input;
  }
}
