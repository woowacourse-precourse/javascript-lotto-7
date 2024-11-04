import ERROR from '../constants/errors.js';

class BonusNumber {
  #value;
  constructor (number, lotto) {
    BonusNumber.#validate(number, lotto);
    this.#value = number;
  }

  static #validate (number, lotto) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR.LOTTO.NUMBER_OUT_OF_RANGE);
    }
    if (lotto.has(number)) {
      throw new Error(ERROR.LOTTO.BONUS_NUMBER_IS_DUPLICATED);
    }
  }

  get value () {
    return this.#value;
  }

}

export default BonusNumber;
