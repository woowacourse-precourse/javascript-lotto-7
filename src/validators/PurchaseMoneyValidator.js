import Validator from "./Validator.js";

class PurchaseMoneyValidator {
  // 로또 구입 금액의 유효성을 검사하는 메서드
  static checkValid(purchaseMoney) {
    Validator.isNotNumber(purchaseMoney);
  }
}

export default PurchaseMoneyValidator;
