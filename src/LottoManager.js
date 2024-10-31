import Lotto from './Lotto.js';

class LottoManager {
  static #lottoPrice = 1_000;

  #lottoCount;
  #lottoArray;

  constructor(purchasePrice) {
    this.#lottoCount = purchasePrice / LottoManager.#lottoPrice;
    this.#lottoArray = this.#generateLottoArray(this.#lottoCount);
  }

  get lottoArray() {
    return this.#lottoArray;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  #generateLottoArray() {
    return new Array(this.#lottoCount).fill().map(() => {
      const lotto = new Lotto();
      lotto.init();
      return lotto;
    });
  }
}

export default LottoManager;
