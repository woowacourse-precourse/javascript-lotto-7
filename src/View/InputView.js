import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  #INPUT_MESSAGE = Object.freeze({
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  });

  async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync(
      this.#INPUT_MESSAGE.PURCHASE_AMOUNT,
    );
    return input;
  }
}
