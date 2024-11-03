import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static #MESSAGE = Object.freeze({
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  });

  static async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync(
      InputView.#MESSAGE.PURCHASE_AMOUNT,
    );
    return input;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(
      InputView.#MESSAGE.WINNING_NUMBERS,
    );
    return input;
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(InputView.#MESSAGE.BONUS_NUMBER);
    return input;
  }
}
