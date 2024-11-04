import ERROR from '../constants/errors.js';
import { LOTTO } from '../constants/lotto.js';
import isUnitFormmat from '../utils/isUnitFormmat.js';

class PurcahseAmount {
  #amount;

  constructor (amount) {
    PurcahseAmount.#validate(amount);
    this.#amount = Number(amount);
  }

  static #validate (amount) {
    if (!isNaN(amount)) {
      throw new Error(ERROR.PURCHASE.MUST_BE_NUMBER);
    }
    if (!isUnitFormmat(amount, LOTTO.PRICE)) {
      throw new Error(ERROR.PURCHASE.MUST_BE_DIVIDED_INTO_UNITS);
    }
  }

  get amount () {
    return this.#amount;
  }
}

export default PurcahseAmount;
