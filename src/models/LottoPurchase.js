import { INPUT_ERROR, PRICE_ERROR } from '../constants/error.js';
import { isBlank, isNumber, isThousandUnit } from '../utils/validation.js';

class LottoPurchase {
  constructor(price) {
    this.price = price;
    this.validatePrice();
  }

  validatePrice() {
    if (isBlank(this.price)) throw new Error(INPUT_ERROR.inputBlankError);
    if (!isNumber(this.price)) throw new Error(INPUT_ERROR.inputTypeError);
    if (!isThousandUnit(this.price))
      throw new Error(PRICE_ERROR.priceUnitError);
  }

  getLottoCount() {
    return Number(this.price) / 1000;
  }
}

export default LottoPurchase;
