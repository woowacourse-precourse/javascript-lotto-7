import getRandomNumbers from '../Utils/getRandomNumbers.js';
import Lotto from './Lotto.js';

class LottoBundle {
  #lottoList;
  constructor(purchaseCount) {
    this.#lottoList = this.createList(purchaseCount);
  }

  // number => Lotto[]
  createList(purchaseCount) {
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
