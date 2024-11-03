import getRandomNumbers from './Utils/getRandomNumbers.js';
import { throwError } from './Utils/handleError.js';
import Rules from './Utils/Rules.js';
import Errors from './Constants/Errors.js';
import Lotto from './Lotto.js';

class LottoBundle {
  #lottoList;

  constructor(purchaseCount) {
    this.#validate(purchaseCount);
    this.#lottoList = this.#createList(purchaseCount);
  }

  #validate(purchaseCount) {
    if (Rules.isNotNumber(purchaseCount))
      throwError(Errors.PurchaseCount.NOT_NUMBER_VALUE);
  }

  #createList(purchaseCount) {
    return Array.from(
      { length: purchaseCount },
      () => new Lotto(getRandomNumbers())
    );
  }

  getList() {
    return this.#lottoList;
  }
}

export default LottoBundle;
