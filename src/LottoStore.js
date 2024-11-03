import Validator from './utils/Validator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoBundle from './LottoBundle.js';
import { PRINT_MESSAGES } from './constants/messages.js';
import { LOTTO_VALUES } from './constants/lottoConstants.js';

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

    const lottoBundle = this.#generateLottos();
    return { lottoCount: this.#lottoCount, lottoBundle };
  }

  static async #getValidAmount() {
    while (true) {
      try {
        const inputAmount = await InputView.getUserInput(PRINT_MESSAGES.INPUT.AMOUNT);
        Validator.validateAmount(inputAmount);
        return inputAmount;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #setPurchaseAmount(userAmount) {
    this.#amount = parseInt(userAmount, 10);
    this.#lottoCount = this.#getLottoCount();
  }

  #getLottoCount() {
    return Math.floor(this.#amount / LOTTO_VALUES.LOTTO_PRICE);
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
