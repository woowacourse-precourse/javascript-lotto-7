import {
  GAME_SETTINGS,
  ERROR_MESSAGES,
  REGEX,
  LOTTO,
} from '../utils/constants.js';

class PurchaseValidator {
  static validate(purchaseAmount) {
    if (this.#isNotNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
    const formattedAmount = this.#formatAmount(purchaseAmount);

    if (this.#isNotPositiveNumber(formattedAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_POSITIVE);
    }

    if (this.#isNotDivisibleByThousand(formattedAmount)) {
      throw new Error(
        ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY(LOTTO.TICKET_PRICE)
      );
    }
    return formattedAmount;
  }

  static #isNotNumber(purchaseAmount) {
    const isValidFormat = [
      REGEX.NO_COMMA_NUMBER_REGEX,
      REGEX.THOUSANDS_COMMA_REGEX,
    ].some((regex) => regex.test(purchaseAmount));
    return !isValidFormat;
  }

  static #formatAmount(purchaseAmount) {
    return Number(
      purchaseAmount.replace(REGEX.COMMA_REGEX, GAME_SETTINGS.EMPTY_STRING)
    );
  }

  static #isNotPositiveNumber(formattedAmount) {
    return formattedAmount <= GAME_SETTINGS.ZERO;
  }

  static #isNotDivisibleByThousand(formattedAmount) {
    return formattedAmount % LOTTO.TICKET_PRICE !== 0;
  }
}

export default PurchaseValidator;
