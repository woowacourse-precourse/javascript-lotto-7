import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import Lotto from './Lotto.js';

export default class WinningLotto {
  #mainLotto;
  #bonusNumber;

  setMainLotto(mainNumbers) {
    this.#validateMainNumbers(mainNumbers);
    this.#mainLotto = new Lotto(mainNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getMainLotto() {
    return this.#mainLotto;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validateMainNumbers(mainNumbers) {
    mainNumbers.forEach((number) => this.#checkNumberInRange(number));
    this.#checkMainNumbersDuplication(mainNumbers);
  }

  #validateBonusNumber(bonusNumber) {
    this.#checkNumberInRange(bonusNumber);
    this.#checkBonusNumberDuplication(bonusNumber);
  }

  #checkNumberInRange(number) {
    if (
      !(number >= LOTTO_CONFIG.MIN_NUMBER && number <= LOTTO_CONFIG.MAX_NUMBER)
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_NUMBER_RANGE);
    }
  }

  #checkMainNumbersDuplication(mainNumbers) {
    const uniqueNumbers = new Set(mainNumbers);

    if (uniqueNumbers.size !== LOTTO_CONFIG.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATION);
    }
  }

  #checkBonusNumberDuplication(bonusNumber) {
    const mainNumbers = this.#mainLotto.getNumbers();
    const uniqueNumbers = new Set([...mainNumbers, bonusNumber]);

    if (
      uniqueNumbers.size !==
      LOTTO_CONFIG.NUMBERS_COUNT + LOTTO_CONFIG.BONUS_NUMBERS_COUNT
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO.BONUS_NUMBER_DUPLICATION);
    }
  }
}
