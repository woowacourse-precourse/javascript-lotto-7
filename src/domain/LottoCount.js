import parser from '../utils/parser.js';
import validateLottoPurchasePrice from '../validations/validateLottoPurchasePrice.js';

class LottoCount {
  #lottoCount;

  constructor(price) {
    this.#lottoCount = this.#parseAndValidate(price);
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  #parseAndValidate(price) {
    validateLottoPurchasePrice(price);
    return parser.parseMoneyToLottoCount(price);
  }
}

export default LottoCount;
