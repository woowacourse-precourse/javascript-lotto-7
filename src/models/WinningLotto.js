import LottoValidator from "../libs/validator.js";

class WinningLotto {
  #winningNumbers = null;
  #bonusNumber = null;

  constructor(winningNumbers, bonusNumber) {
    LottoValidator.validateWinningNumbers(winningNumbers);
    LottoValidator.validateBonusNumber(winningNumbers, bonusNumber);
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  existWinningNumber(number) {
    return this.#winningNumbers.includes(number);
  }

  /**
   *
   * @param {number[]} lotto
   * @returns
   */
  getMatchCount(lotto) {
    const matchCount = this.#winningNumbers.filter((num) => lotto.includes(num)).length;
    const hasBonus = lotto.includes(this.#bonusNumber);
    return { matchCount, hasBonus };
  }
}

export default WinningLotto;
