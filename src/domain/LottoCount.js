import parser from '../utils/parser.js';
import LottoPurchasePriceValidations from '../validations/LottoPurchasePriceValidations.js';

class LottoCount {
  #lottoCount;

  constructor(price) {
    this.#validate(price);
    this.#lottoCount = parser.parseMoneyToLottoCount(price);
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  #validate(price) {
    LottoPurchasePriceValidations(price);
  }
}

export default LottoCount;
