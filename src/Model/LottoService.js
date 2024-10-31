import { PURCHASE_AMOUNT_RANGE, ERROR_MSG } from '../../Util/Constants.js';

export default class LottoService {
  construct() {}

  setPurcharedAmount(price) {
    this.#validate(price);
  }

  #validate(price) {
    if (price < PURCHASE_AMOUNT_RANGE.min || price > PURCHASE_AMOUNT_RANGE.max) {
      throw Error(ERROR_MSG.outOfRange);
    }

    if (price % 1000) {
      throw Error(ERROR_MSG.priceMisalign);
    }
  }
}
