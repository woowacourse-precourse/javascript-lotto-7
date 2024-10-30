import { RULE, ERROR_MESSAGE } from './constants/index.js';

class LottoManager {
  validatePrice(price) {
    if (isNaN(price)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
    if (price < RULE.LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_PRICE(RULE.LOTTO_PRICE));
    }
    if (price % RULE.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT(RULE.LOTTO_PRICE));
    }
  }

  buyLottos(price) {
    const lottoCount = price / RULE.LOTTO_PRICE;
  }
}
export default LottoManager;
