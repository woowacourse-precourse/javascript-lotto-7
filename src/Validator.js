import { UNIT_LOTTO_PRICE } from "./constants/index.js";

export class Validator {
  validatePurchaseAmount = (purchaseAmount) => {
    if (purchaseAmount === '') {
      throw new Error('[ERROR] 구입 금액이 입력되지 않았습니다.');
    }
    if (!Number.isInteger(parseFloat(purchaseAmount))) {
      throw new Error('[ERROR] 구입 금액은 정수이어야 합니다.');
    }
    if (purchaseAmount < 1000) {
      throw new Error('[ERROR] 구입 금액은 1,000원 이상이어야 합니다.');
    }
    if (parseInt(purchaseAmount, 10) % UNIT_LOTTO_PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  };
}
