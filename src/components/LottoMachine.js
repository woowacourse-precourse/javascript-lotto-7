import Lotto from './Lotto.js';
import { getRandomNumbers } from '../utils/NumberUtils.js';
import Output from '../utils/io/Output.js';

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
    const lottoListNumbers = this.#lottoList.map((lotto) => lotto.getNumbers());
    return lottoListNumbers;
  }

  printPurchasedLotto() {
    const lottoList = this.getLottoList();

    Output.print(`\n${lottoList.length}개를 구매했습니다.`);
    Output.printArrayWithComma(lottoList);
  }
}

export default LottoMachine;
