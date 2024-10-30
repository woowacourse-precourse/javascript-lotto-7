import parser from '../utils/parser.js';
import LottoPurchasePriceValidations from '../validations/LottoPurchasePriceValidations.js';

class LottoCount {
  #lottoCount;

  constructor(price) {
    this.#lottoCount = this.#parseAndValidate(price);
  }

  #parseAndValidate(price) {
    LottoPurchasePriceValidations(price);
    return parser.parseMoneyToLottoCount(price);
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

export default LottoCount;
