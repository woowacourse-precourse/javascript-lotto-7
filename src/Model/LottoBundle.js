import getRandomNumbers from '../Utils/getRandomNumbers';
import Lotto from './Lotto';

class LottoBundle {
  #lottoList;
  constructor(purchaseCount) {
    this.#lottoList = this.createLottoList(purchaseCount);
  }

  createLottoList(purchaseCount) {
    return Array.from(
      { length: purchaseCount },
      () => new Lotto(getRandomNumbers())
    );
  }

  getLottoList() {
    return this.#lottoList;
  }
}

export default LottoBundle;
