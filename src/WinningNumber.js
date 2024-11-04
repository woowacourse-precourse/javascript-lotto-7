import { LOTTO, ERROR_MESSAGE } from './constants.js';
import Lotto from './Lotto.js';

class WinningNumber {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateBonusNumber(bonusNumber, numbers);
    this.#numbers = new Lotto(numbers).getNumbers();
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonus, numbers) {
    this.#validateBonusNumberFormat(bonus);
    this.#validateBonusNumberRange(bonus);
    this.#validateBonusNumberDuplicate(bonus, numbers);
  }

  #validateBonusNumberFormat(bonus) {
    if (!Number.isInteger(bonus)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  #validateBonusNumberRange(bonus) {
    if (bonus < LOTTO.MIN_NUMBER || bonus > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateBonusNumberDuplicate(bonus, numbers) {
    if (numbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS);
    }
  }

  getWinningNumbers() {
    return [...this.#numbers];
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumber;
