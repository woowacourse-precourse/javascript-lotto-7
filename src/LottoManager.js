import { calculateRateOfReturn } from './lib/utils.js';
import Lotto from './Lotto.js';

class LottoManager {
  static #lottoPrice = 1_000;

  #lottoArray;
  #winningLottoArray;
  #bonusNumber;

  constructor(lottoArray, winningLottoArray, bonusNumber) {
    this.#lottoArray = lottoArray;
    this.#winningLottoArray = winningLottoArray;
    this.#bonusNumber = bonusNumber;
  }

  static getLottoCount(purchasePrice) {
    return purchasePrice / LottoManager.#lottoPrice;
  }

  static generateLottoArray(lottoCount) {
    return new Array(lottoCount).fill().map(() => new Lotto());
  }

  draw() {
    const rankMap = this.#createRankMap();
    let totalWinningPrice = 0;

    this.#lottoArray.forEach((lotto) => {
      const rankObject = lotto.getRankObject(
        this.#winningLottoArray,
        this.#bonusNumber,
      );

      if (rankObject) {
        rankMap.set(rankMap.get(rankObject.rank) + 1);
        totalWinningPrice += rankObject.winningPrice;
      }
    });

    return { rankMap, totalWinningPrice };
  }

  #createRankMap() {
    return new Map(new Array(5).fill().map((_, index) => [index + 1, 0]));
  }
}

export default LottoManager;
