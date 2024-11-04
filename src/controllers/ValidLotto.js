import { LOTTO_ERROR, CONSTANT } from "../constants/Constants";

class ValidLotto {
  validLottoPrice(lottoPrice) {
    const validPrice = Number(lottoPrice);
    if (isNaN(validPrice) || validPrice % CONSTANT.LOTTO_PRICE !== 0) {
      throw new Error(LOTTO_ERROR.LOTTO_PRICE_UNIT);
    }
  }
}

export default ValidLotto;
