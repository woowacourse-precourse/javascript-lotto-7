import { isNaturalNumber } from './utils/isNaturalNumber.js';
import { ERROR_MESSAGE } from './constants/ERROR_MESSAGES.js';

class Generator {
  #purchaseAmount;

  constructor(input) {
    this.#validateNaturalNumber(input);
  }

  #validateNaturalNumber(input) {
    if (!isNaturalNumber(input)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NATURAL_NUMBER);
    }
  }
}

export default Generator;
