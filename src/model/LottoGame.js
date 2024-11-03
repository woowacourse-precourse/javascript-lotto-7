import Lotto from './Lotto.js';
import generateRandomList from '../util/generateRandomList.js';
import { CONFIG } from '../constants/constants.js';

class LottoGame {
  #generator;
  #lottoNumbers = [];
  #rankCount;

  constructor(purchaseAmount, generator = () => generateRandomList()) {
    const tickets = purchaseAmount / CONFIG.PURCHASE_AMOUNT_UNIT;
    this.#generator = generator;
    this.#lottoNumbers = Array.from({ length: tickets }, () => {
      const numbers = this.#generator();
      return new Lotto([...numbers].sort((a, b) => a - b));
    });
    this.#rankCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }

  getRankCount() {
    return this.#rankCount;
  }

  calculatePrize() {}

  calculateRevenue(prize) {}
}

export default LottoGame;
