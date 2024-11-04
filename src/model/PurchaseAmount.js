import { UTILS } from "../common/constants.js";

class PurchaseAmount {
  constructor(amount) {
    this.validate(amount);
  }

  validate(amount) {
    if (amount === undefined || amount === null) {
      throw new Error("[ERROR] 구입금액을 입력해야 합니다.");
    }
    const amountStr = amount.toString();
    if (!UTILS.positive_integer.test(amountStr) || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 양의 정수로 입력해야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입 금액은 1000 단위의 숫자로 입력해야 합니다."
      );
    }
  }
}

export default PurchaseAmount;
