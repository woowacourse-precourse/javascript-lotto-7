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

    /**
   * 생성된 로또 개수를 반환하는 메서드
   * @returns {number} 로또 개수
   */
  getLottoCount() {
    return this.#lottoCount;
  }

    /**
   * 생성된 모든 로또 번호 배열을 반환하는 메서드
   * @returns {Array} 로또 번호 배열
   */
  getLottoNumbers() {
    return this.#lottoNumbers;
  }

    /**
   * 구매 금액을 반환하는 메서드
   * @returns {number} 구매 금액
   */
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
