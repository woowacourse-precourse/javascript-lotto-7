import { ERROR_MESSAGE } from "./Constant.js";

class Validator {
  purchaseAmount(purchaseAmount) {
    // 숫자가 아닌 경우
    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    // 1000원보다 적은 경우
    if (Number(purchaseAmount) < 1000) {
      throw new Error(ERROR_MESSAGE.MINIMUM_PURCHASE_AMOUNT);
    }

    // 1000원으로 떨어지지 않는 경우
    if (Number(purchaseAmount) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_UNIT_1000);
    }
  }
}

export default Validator;
