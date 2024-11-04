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
      generateError("숫자로 입력하지 않았습니다. 로또 구입 금액은 숫자로 입력할 수 있습니다.");
    }
  }

  static #isNotThousandUnit(purchaseMoney) {
    if (purchaseMoney % 1000 !== 0) {
      generateError("1,000원 단위가 아닙니다. 로또 금액은 1,000원 단위로 입력가능합니다.");
    }
  }

  static #isUnderThousand(purchaseMoney) {
    if (purchaseMoney < 1000) {
      generateError("로또 금액은 1,000원부터 입력가능합니다.");
    }
  }
}

export default PurchaseMoneyValidator;
