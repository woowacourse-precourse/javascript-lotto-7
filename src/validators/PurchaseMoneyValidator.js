import { INPUT_INVALID } from "../constants/Message.js";
import { LOTTO } from "../constants/Setting.js";
import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class PurchaseMoneyValidator {
  static checkValid(purchaseMoney) {
    this.#isNotNumber(purchaseMoney);
    this.#isNotThousandUnit(purchaseMoney);
    this.#isUnderThousand(purchaseMoney);
  }

  static #isNotNumber(purchaseMoney) {
    if (Validator.isNotNumber(purchaseMoney)) {
      generateError(INPUT_INVALID.PURCHASE_MONEY.NOT_NUMBER);
    }
  }

  static #isNotThousandUnit(purchaseMoney) {
    if (purchaseMoney % LOTTO.PRICE !== 0) {
      generateError(INPUT_INVALID.PURCHASE_MONEY.INVALID_UNIT);
    }
  }

  static #isUnderThousand(purchaseMoney) {
    if (purchaseMoney < LOTTO.PRICE) {
      generateError(INPUT_INVALID.PURCHASE_MONEY.UNDER_MIN);
    }
  }
}

export default PurchaseMoneyValidator;
