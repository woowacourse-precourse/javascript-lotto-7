import Validator from './utils/Validator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoBundle from './LottoBundle.js';

class LottoStore {
  #amount;

  #lottoCount;

  constructor() {
    this.#amount = 0;
    this.#lottoCount = 0;
  }

  async purchaseLottos() {
    const userAmount = await LottoStore.#getValidAmount();
    this.#setPurchaseAmount(userAmount);
    this.#printLottoCount();

    const lottoBundle = this.#generateLottos();
    return lottoBundle;
  }

  static async #getValidAmount() {
    while (true) {
      try {
        const inputAmount = await InputView.getUserInput('구입금액을 입력해 주세요.\n');
        LottoStore.#validateAmount(inputAmount);
        return inputAmount;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #setPurchaseAmount(userAmount) {
    this.#amount = LottoStore.#parseAmount(userAmount);
    this.#lottoCount = this.#getLottoCount();
  }

  #printLottoCount() {
    OutputView.printMessage(`\n${this.#lottoCount}개를 구매했습니다.`);
  }

  static #validateAmount(amount) {
    Validator.checkIsNull(amount);
    Validator.checkRegexPattern(amount, /^\d+$/, '금액은 숫자만 입력 가능합니다.');
    Validator.checkValidRange(amount, 1000, 100000, '금액은 1000원 이상 10만원 이하로 입력 가능합니다.');
    LottoStore.#checkThousandUnit(amount);
  }

  static #checkThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1000원 단위로 입력 가능합니다.');
    }
  }

  static #parseAmount(amount) {
    return parseInt(amount, 10);
  }

  #getLottoCount() {
    return Math.floor(this.#amount / 1000);
  }

  #generateLottos() {
    const lottoBundle = new LottoBundle();
    lottoBundle.generateLottos(this.#lottoCount);
    return lottoBundle;
  }
}

export default LottoStore;
