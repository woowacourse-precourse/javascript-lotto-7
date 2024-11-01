import { Console } from '@woowacourse/mission-utils';

export default class InputLottoView {
  #INPUT_MESSAGE = {
    REQUEST_PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  };

  #ERROR_MESSAGE = {
    INVALID_NUMBER: '[ERROR] 숫자를 입력해주세요.\n',
    INVALID_BLANK: '[ERROR] 값을 입력해주세요.\n',
  };

  async getInputPrice() {
    const purchasePrice = await Console.readLineAsync(
      this.#INPUT_MESSAGE.REQUEST_PURCHASE_PRICE
    );
    this.#validateNumber(purchasePrice);
    this.#validateBlank(purchasePrice);

    return Number(purchasePrice);
  }

  #validateNumber(input) {
    if (isNaN(Number(input))) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

  #validateBlank(input) {
    if (input.trim() === '') {
      throw new Error(this.#ERROR_MESSAGE.INVALID_BLANK);
    }
  }
}
