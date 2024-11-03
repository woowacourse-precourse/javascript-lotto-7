import { GAME_RULES } from '../constants/gameRule.js';
import { getSortedRandomNumbers } from '../utils/game.js';
import validatePurchaseAmount from '../validators/PurchaseAmountValidator.js';

class LottoMachine {
  #purchaseAmount;
  #lottoCount;
  #lottoNumbers;

  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
    this.#lottoCount = this.#calculateLottoCount();
    this.#lottoNumbers = this.#generateLottoNumbers();
  }

  #calculateLottoCount() {
    return this.#purchaseAmount / GAME_RULES.CURRENCY_UNIT;
  }

  #generateLottoNumbers = () => Array(this.#lottoCount).fill().map(() => getSortedRandomNumbers(1, 45, 6));

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }
}

export default LottoMachine;