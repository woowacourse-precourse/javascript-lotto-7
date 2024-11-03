import { GAME_RULES } from '../constants/gameRule.js';
import { getSortedRandomNumbers } from '../utils/game.js';
import validatePurchaseAmount from '../validators/PurchaseAmountValidator.js';
import Lotto from '../model/Lotto.js';

class LottoMachine {
  #purchaseAmount;
  #lottoCount;
  #lottoNumbers;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
    this.#lottoCount = this.#calculateLottoCount();
    this.#lottoNumbers = this.#generateLottoNumbers();
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  #validate(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }

  #calculateLottoCount() {
    return this.#purchaseAmount / GAME_RULES.CURRENCY_UNIT;
  }

  #generateLottoNumbers() {
    return Array.from({ length: this.#lottoCount }, () => this.#createValidatedLottoNumbers());
  }

  #createValidatedLottoNumbers() {
    const numbers = getSortedRandomNumbers(
      GAME_RULES.MIN_LOTTO_NUMBER,
      GAME_RULES.MAX_LOTTO_NUMBER,
      GAME_RULES.LOTTO_NUMBER_COUNT
    );
    const lotto = new Lotto(numbers);
    return lotto.getNumbers();
  }
}

export default LottoMachine;
