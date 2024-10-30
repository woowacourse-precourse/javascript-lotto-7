import parser from '../utils/parser.js';
import LottoPurchasePriceValidations from '../validations/LottoPurchasePriceValidations.js';

class LottoCount {
  #lottoCount;

  constructor(price) {
    this.#lottoCount = this.#parseAndValidate(price);
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  #parseAndValidate(price) {
    LottoPurchasePriceValidations(price);
    return parser.parseMoneyToLottoCount(price);
  }
}

export default LottoCount;
