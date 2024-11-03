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

  lottoNumbers(lottoNumbers) {
    // 1-45 사이의 숫자가 아닌 경우
    if (!lottoNumbers.every((number) => Number(number) > 0 && Number(number) < 46)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
    }

    //6개가 아닌 경우
    if (lottoNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.SIX_NUMBERS_NEEDED);
    }
  }
}

export default Validator;
