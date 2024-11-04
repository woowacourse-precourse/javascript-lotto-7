import { LOTTO, ERROR_MESSAGE } from './constants.js';
import Lotto from './Lotto.js';

export default class WinningNumber {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateNumbers(numbers);
    this.#validateBonusNumber(bonusNumber, numbers);

    this.#numbers = new Lotto(numbers).getNumbers();
    this.#bonusNumber = bonusNumber;
  }

  #validateNumbers(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }

    if (numbers.some((num) => Number.isNaN(Number(num)))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  #validateBonusNumber(bonus, numbers) {
    const bonusNum = Number(bonus);

    if (Number.isNaN(bonusNum)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }

    if (bonusNum < LOTTO.MIN_NUMBER || bonusNum > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }

    if (numbers.includes(bonusNum)) {
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
