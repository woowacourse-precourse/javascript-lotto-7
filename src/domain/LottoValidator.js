import { ERROR_MESSAGES } from '../constants/messages.js';
import { PRICE_MAX_AMOUNT, PRICE_PER_LOTTO } from '../constants/constants.js';

class LottoValidator {
  validatePurchaseAmount(amount) {
    if (this.#isEmpty(amount)) throw new Error(ERROR_MESSAGES.empty);

    if (this.#isNumeric(amount)) throw new Error(ERROR_MESSAGES.numeric);

    if (this.#isPositive(amount)) throw new Error(ERROR_MESSAGES.positive);

    if (this.#isValidAmount(amount))
      throw new Error(ERROR_MESSAGES.invalid_amount);

    if (this.#isOverValidRange(amount))
      throw new Error(ERROR_MESSAGES.invalid_range);
  }

  #isEmpty(input) {
    return input == null || input.trim() === '';
  }

  #isNumeric(input) {
    return Number.isNaN(Number(input));
  }

  #isPositive(input) {
    return Number(input) <= 0;
  }

  #isValidAmount(input) {
    return Number(input) % PRICE_PER_LOTTO !== 0;
  }

  #isOverValidRange(input) {
    return Number(input) > PRICE_MAX_AMOUNT;
  }
}

export default LottoValidator;
