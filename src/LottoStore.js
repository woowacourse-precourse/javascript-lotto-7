import Validator from './utils/Validator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class LottoStore {
  #amount;

  #lottoCount;

  constructor() {
    this.#amount = 0;
    this.#lottoCount = 0;
  }

  async purchaseLottos() {
    while (true) {
      try {
        const inputAmount
          = await InputView.getUserInput('구입금액을 입력해 주세요.\n');
        LottoStore.#validateAmount(inputAmount);
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  static #validateAmount(amount) {
    Validator.checkIsNull(amount);
    Validator.checkRegexPattern(
      amount,
      /^\d+$/,
      '금액은 숫자만 입력해야 합니다.',
    );
    Validator.checkValidRange(
      amount,
      1000,
      100000,
      '금액은 1000원 이상, 10만원 이하로 입력해야 합니다.',
    );
    LottoStore.#checkThousandUnit(amount);
  }

  static #checkThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1000원 단위로 입력해야 합니다.');
    }
  }
}

export default LottoStore;
