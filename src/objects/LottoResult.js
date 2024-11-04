import { Lotto } from './index.js';

class LottoResult {
  #rankMap;

  constructor() {
    this.#rankMap = new Map();
  }

  addWinning(rank) {
    this.#rankMap.set(rank, (this.#rankMap.get(rank) ?? 0) + 1);
  }

  getWinningCount(rank) {
    return this.#rankMap.get(rank) ?? 0;
  }

  getTotalPrizeMoney() {
    return [...this.#rankMap.entries()].reduce(
      (sum, [rank, count]) => Lotto.getPrizeMoney(rank) * count + sum,
      0,
    );
  }
}
export default LottoResult;
