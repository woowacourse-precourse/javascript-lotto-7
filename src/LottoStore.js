import Validator from './utils/Validator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoBundle from './LottoBundle.js';
import { PRINT_MESSAGES, ERROR_MESSAGES } from './constants/messages.js';
import REGEX from './constants/regex.js';

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
    OutputView.printMessage(PRINT_MESSAGES.OUTPUT.LOTTO_COUNT(this.#lottoCount));

    const lottoBundle = this.#generateLottos();
    OutputView.printLottoBundle(lottoBundle.getLottos());
    return lottoBundle;
  }

  static async #getValidAmount() {
    while (true) {
      try {
        const inputAmount = await InputView.getUserInput(PRINT_MESSAGES.INPUT.AMOUNT);
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

  static #validateAmount(amount) {
    Validator.checkIsNull(amount);
    Validator.checkRegexPattern(amount, REGEX.NUMBER_REGEX, ERROR_MESSAGES.INVALID_AMOUNT_INPUT);
    Validator.checkValidRange(amount, 1000, 100000, ERROR_MESSAGES.INVALID_AMOUNT_RANGE);
    LottoStore.#checkThousandUnit(amount);
  }

  static #checkThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
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

  getAmount() {
    return this.#amount;
  }
}

export default LottoStore;
