import { Console } from '@woowacourse/mission-utils';
import { getPurchaseAmount } from '../utils/getUserInput.js';
import {
  GAME_SETTINGS,
  ERROR_MESSAGES,
  REGEX,
  LOTTO,
} from '../utils/constants.js';

class PurchaseValidator {
  static async validatePurchaseAmount(purchaseAmount) {
    try {
      this.#isPositiveNumber(purchaseAmount);
      this.#isNumber(purchaseAmount);
      this.#isDivisibleByThousand(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);

      const isValidInput = await getPurchaseAmount();
      return this.validatePurchaseAmount(isValidInput);
    }
  }

  static #isNumber(purchaseAmount) {
    const isValidFormat = [
      REGEX.NO_COMMA_NUMBER_REGEX,
      REGEX.THOUSANDS_COMMA_REGEX,
    ].some((regex) => regex.test(purchaseAmount));
    if (!isValidFormat) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }

  static #cleanAmount(purchaseAmount) {
    return Number(
      purchaseAmount.replace(REGEX.COMMA_REGEX, GAME_SETTINGS.EMPTY_STRING)
    );
  }

  static #isPositiveNumber(purchaseAmount) {
    if (this.#cleanAmount(purchaseAmount) <= GAME_SETTINGS.ZERO) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_POSITIVE);
    }
  }

  // TODO: 정상작동하지만 가독성을 위해 분기처리해야할까? 조건문이 길다.
  static #isDivisibleByThousand(purchaseAmount) {
    if (this.#cleanAmount(purchaseAmount) % LOTTO.TICKET_PRICE !== 0) {
      throw new Error(
        ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY(LOTTO.TICKET_PRICE)
      );
    }
  }
}

export default PurchaseValidator;
