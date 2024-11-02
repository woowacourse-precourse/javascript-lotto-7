import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class PurchaseMoneyValidator {
  // 로또 구입 금액의 유효성을 검사하는 메서드
  static checkValid(purchaseMoney) {
    Validator.isNotNumber(purchaseMoney);
    PurchaseMoneyValidator.isNotThousandUnit(purchaseMoney);
  }

  // 10,00원 단위의 입력이 아닌 경우
  static isNotThousandUnit(purchaseMoney) {
    if (purchaseMoney % 1000 !== 0) {
      generateError("1,000원 단위가 아닙니다. 로또 금액은 1,000원 단위로 입력가능합니다.");
    }
  }
}

export default PurchaseMoneyValidator;
