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

  calculateProfitFromLottos(lottosRank) {
    let totalAmount = 0;
    for (let i = 1; i <= LOTTO_INFO.MIN_RANK; i += 1) {
      totalAmount += lottosRank[i] * LOTTO_INFO.WINNING_MONEY[i];
    }

    return (totalAmount / this.#money) * 100;
  }
}

export default LottoMachine;
