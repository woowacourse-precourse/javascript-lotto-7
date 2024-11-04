import errorMessages from '../constants/errorMessage.js';

class Validate {
  static validateMoney(money) {
    const numberMoney = Number(money);
    if (!this.#isPositiveInteger(numberMoney) || numberMoney % 1000 !== 0) {
      throw new Error(errorMessages.MONEY_ERROR);
    }
  }

  static validateLottoNumbers(lottoNumbers) {
    if (lottoNumbers.length !== 6) throw new Error(errorMessages.LOTTOS_LENGHT_ERROR);
    for (const number of lottoNumbers) {
      if (!this.#isPositiveInteger(number)) throw new Error(errorMessages.LOTTO_NUM_ERROR);
      if (!this.#isInRange(number)) throw new Error(errorMessages.LOTTO_RANGE_ERROR);
    }
    if (this.#hasDuplicates(lottoNumbers)) throw new Error(errorMessages.LOTTOS_DUPLICATE_ERROR);
  }

  static validateBonusNum(bonusNum, winningLottoNumbers) {
    if (!this.#isPositiveInteger(bonusNum)) throw new Error(errorMessages.LOTTO_NUM_ERROR);
    if (!this.#isInRange(bonusNum)) throw new Error(errorMessages.LOTTO_RANGE_ERROR);
    if (this.#hasDuplicates([bonusNum, ...winningLottoNumbers])) {
      throw new Error(errorMessages.BONUS_DUPLICATE_ERROR);
    }
  }

  static #isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  static #isInRange(num) {
    return 1 <= num && num <= 45;
  }

  static #hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
  }
}

export default Validate;
