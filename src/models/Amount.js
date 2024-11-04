import { isInteger, isMultipleOfLottoPrice } from '../utils/validator.js';
import throwError from '../utils/throwError.js';
import { INVALID_AMOUNT } from '../constants/error.js';

class Amount {
  #amount;

  constructor(amount) {
    this.#amount = amount;
    this.#validateAmount();
  }

  #validateAmount() {
    let isValid = true;
    isValid = isInteger(this.#amount) && isMultipleOfLottoPrice(this.#amount);
    !isValid && throwError(INVALID_AMOUNT);
  }

  getAmount() {
    return this.#amount;
  }
}

export default Amount;
