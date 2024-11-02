import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import Lotto from './Lotto.js';
import { lottoConfig } from './lottoConfig.js';

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
      !(
        number >= lottoConfig.MIN_NUMBER &&
        number <= lottoConfig.MAX_NUMBER
      )
    ) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO.INVALID_NUMBER_RANGE);
    }
  }

  #checkMainNumbersDuplication(mainNumbers) {
    const uniqueNumbers = new Set(mainNumbers);

    if (uniqueNumbers.size !== lottoConfig.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO.MAIN_NUMBER_DUPLICATION);
    }
  }

  #checkBonusNumberDuplication(bonusNumber) {
    const mainNumbers = this.#mainLotto.getNumbers()
    const uniqueNumbers = new Set([...mainNumbers, bonusNumber]);

    if (
      uniqueNumbers.size !==
      lottoConfig.NUMBERS_COUNT + lottoConfig.BONUS_NUMBERS_COUNT
    ) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO.BONUS_NUMBER_DUPLICATION);
    }
  }
}
