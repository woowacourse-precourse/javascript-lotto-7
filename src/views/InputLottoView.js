import { Console } from '@woowacourse/mission-utils';

export default class InputLottoView {
  #INPUT_MESSAGE = {
    PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
    WINNGING_LOTTO_MAIN_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  };
  #ERROR_MESSAGE = {
    INVALID_NUMBER: '[ERROR] 숫자를 입력해주세요.\n',
    INVALID_BLANK: '[ERROR] 값을 입력해주세요.\n',
    INVALID_COMMA_FORMAT:
      '[ERROR] 당첨 번호는 쉼표(,)를 기준으로 6개를 입력해주세요.\n',
  };
  #SPLIT_COMMA_REGEX = /^(\d+)(,\d+){5}$/;

  async getInputPrice() {
    const purchasePrice = await Console.readLineAsync(
      this.#INPUT_MESSAGE.PURCHASE_PRICE
    );

    this.#validatePurchasePrice(purchasePrice);

    return Number(purchasePrice);
  }

  async getInputWinningLottoMainNumbers() {
    const mainNumbersString = await Console.readLineAsync(
      this.#INPUT_MESSAGE.WINNGING_LOTTO_MAIN_NUMBERS
    );

    this.#validateWinningLottoMainNumbers(mainNumbersString);

    const mainNumbers = this.#splitAndSortNumbers(mainNumbersString);

    return mainNumbers;
  }

  async getInputWinningLottoBonusNumber() {}

  #splitAndSortNumbers(string) {
    return string
      .split(',')
      .map((number) => Number(number))
      .sort((a, b) => a - b);
  }

  #validatePurchasePrice(purchasePrice) {
    this.#validateNumber(purchasePrice);
    this.#validateBlank(purchasePrice);
  }

  #validateWinningLottoMainNumbers(mainNumbersString) {
    this.#validateCommaSeparatedNumbers(mainNumbersString);
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

  #validateCommaSeparatedNumbers(input) {
    if (!this.#SPLIT_COMMA_REGEX.test(input)) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_COMMA_FORMAT);
    }
  }
}
