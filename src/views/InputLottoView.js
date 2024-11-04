import { Console } from '@woowacourse/mission-utils';

export default class InputLottoView {
  #INPUT_MESSAGE = {
    PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
    WINNING_LOTTO_MAIN_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
    WINNING_LOTTO_BOUNS_NUMBER: '\n보너스 번호를 입력해 주세요.\n'
  };
  #ERROR_MESSAGE = {
    INVALID_NUMBER: '[ERROR] 숫자를 입력해주세요.\n',
    INVALID_BLANK: '[ERROR] 값을 입력해주세요.\n',
    INVALID_COMMA_FORMAT:
      '[ERROR] 당첨 번호는 쉼표(,)를 기준으로 6개를 입력해주세요.\n',
  };
  #SPLIT_COMMA_REGEX = /^(\d+)(,\d+){5}$/;
  #SPLITTER = ','

  async getInputPrice() {
    const purchasePrice = await Console.readLineAsync(
      this.#INPUT_MESSAGE.PURCHASE_PRICE
    );

    this.#validatePurchasePrice(purchasePrice);

    return Number(purchasePrice);
  }

  async getInputWinningLottoMainNumbers() {
    const mainNumbersString = await Console.readLineAsync(
      this.#INPUT_MESSAGE.WINNING_LOTTO_MAIN_NUMBERS
    );

    this.#validateWinningLottoMainNumbers(mainNumbersString);

    return this.#splitAndSortNumbers(mainNumbersString);
  }

  async getInputWinningLottoBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      this.#INPUT_MESSAGE.WINNING_LOTTO_BOUNS_NUMBER
    );

    this.#validateBonusNumber(bonusNumber);

    return Number(bonusNumber);
  }

  #splitAndSortNumbers(string) {
    return string
      .split(this.#SPLITTER)
      .map((number) => Number(number))
      .sort((a, b) => a - b);
  }

  #validatePurchasePrice(purchasePrice) {
    this.#checkNumber(purchasePrice);
    this.#checkBlank(purchasePrice);
  }

  #validateWinningLottoMainNumbers(mainNumbersString) {
    this.#checkFormatCommaSeparatedNumbers(mainNumbersString);
    this.#checkBlank(mainNumbersString);
  }

  #validateBonusNumber(bonusNumber){
    this.#checkNumber(bonusNumber);
    this.#checkBlank(bonusNumber);
  }

  #checkNumber(input) {
    if (isNaN(Number(input))) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

  #checkBlank(input) {
    if (input === null || input.trim() === '') {
      throw new Error(this.#ERROR_MESSAGE.INVALID_BLANK);
    }
  }

  #checkFormatCommaSeparatedNumbers(input) {
    if (!this.#SPLIT_COMMA_REGEX.test(input)) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_COMMA_FORMAT);
    }
  }
}
