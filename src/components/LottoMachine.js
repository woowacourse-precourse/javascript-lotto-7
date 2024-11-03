import Lotto from './Lotto.js';
import { getRandomNumbers } from '../utils/NumberUtils.js';

class LottoMachine {
  #lottoList = [];

  constructor(price) {
    this.#generateLottos(this.getLottoCount(price));
  }

  getLottoCount(price) {
    return Math.floor(price / 1000);
  }

  #generateLottos(count) {
    let repeat = 0;

    while (repeat < count) {
      const lottoNumbers = getRandomNumbers(1, 45, 6);
      this.#lottoList.push(new Lotto(lottoNumbers));
      repeat += 1;
    }
  }

  getLottoList() {
    return this.#lottoList;
  }
}

export default LottoMachine;
