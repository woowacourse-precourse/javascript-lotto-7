import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export class LottoList {
  #lottoList;
  #rank;

  static profitByRank = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  };

  constructor(quantity) {
    const lottoList = [];

    while (lottoList.length < quantity) {
      lottoList.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
    }

    this.#lottoList = lottoList.map((lotto) => new Lotto(lotto));
    this.#rank = Object.entries(LottoList.profitByRank).reduce(
      (rankMap, [key]) => ({
        ...rankMap,
        [key]: 0,
      }),
      {}
    );
  }

  get lottoList() {
    return this.#lottoList;
  }

  calculateRank(winningNumberList, bonusNumber) {
    this.#lottoList.forEach((lotto) => {
      const rank = lotto.calculateRank(winningNumberList, bonusNumber);

      if (rank === 0) {
        return;
      }

      this.#rank[rank] += 1;
    });
  }

  get profitRate() {
    const INITIAL_PROFIT = 0;

    const allProfit = Object.entries(this.#rank).reduce(
      (prevAllProfit, [currentRank, count]) => {
        const currentProfit = count * LottoList.profitByRank[currentRank];

        return prevAllProfit + currentProfit;
      },
      INITIAL_PROFIT
    );

    return ((allProfit * 100) / (this.#lottoList.length * 1000)).toFixed(1);
  }

  get rank() {
    return this.#rank;
  }
}
