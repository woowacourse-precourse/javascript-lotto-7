import { LOTTO_INFO } from '../constant/index.js';
import Lotto from './Lotto.js';

class LottoMachine {
  #money;

  constructor(money) {
    this.#money = money;
  }

  createLottos() {
    const totalLottoCount = this.#money / LOTTO_INFO.PRICE;

    return Array.from({ length: totalLottoCount }, () => Lotto.create());
  }

  getChargedMoney() {
    return this.#money;
  }
}

export default LottoMachine;
