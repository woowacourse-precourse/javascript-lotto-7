import { isNumber, isMultipleOfThousand } from '../utils/validator.js';
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
    isValid = isNumber(this.#amount) && isMultipleOfThousand(this.#amount);
    !isValid && throwError(INVALID_AMOUNT);
  }
}

export default Amount;
