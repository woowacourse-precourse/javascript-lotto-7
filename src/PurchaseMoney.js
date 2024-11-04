import { ERROR_MESSAGE } from "./constants/errorMessage.js";
import { CONSTANTS } from "./constants/constants.js";

class PurchaseMoney {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    this.#validateIsEmpty(money);
    this.#validateIsNumber(money);
    this.#validateIsPositive(money);
    this.#validateMultipleOfThousand(money);
  }

  #validateIsEmpty(money) {
    if (money === CONSTANTS.NO_INPUT) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  #validateIsNumber(money) {
    if (isNaN(money)) {
      throw new Error(ERROR_MESSAGE.PURCHASE_INVALID);
    }
  }

  #validateIsPositive(money) {
    if (money < CONSTANTS.MIN_PURCHASE_AMOUNT) {
      throw new Error(ERROR_MESSAGE.PURCHASE_POSITIVE);
    }
  }

  #validateMultipleOfThousand(money) {
    if (money % CONSTANTS.LOTTO_TICKET_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_MULTIPLE_OF_THOUSAND);
    }
  }
}

export default PurchaseMoney;
