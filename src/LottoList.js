import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export class LottoList {
  #lottoList;
  #rank = [];

  static #profitByRank = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    0: 0,
  };

  constructor(quantity) {
    const lottoList = [];

    while (lottoList.length < quantity) {
      lottoList.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    this.#lottoList = lottoList.map((lotto) => new Lotto(lotto));
  }

  get lottoList() {
    return this.#lottoList;
  }

  calculateRank(winningNumberList, bonusNumber) {
    this.#rank = this.#lottoList.map((lotto) =>
      lotto.calculateRank(winningNumberList, bonusNumber)
    );
  }

  get profitRate() {
    const INITIAL_PROFIT = 0;

    const allProfit = this.#rank.reduce((prevAllProfit, currentRank) => {
      const currentProfit = currentRank * LottoList.#profitByRank[currentRank];

      return prevAllProfit + currentProfit;
    }, INITIAL_PROFIT);

    return ((allProfit * 100) / (this.#lottoList.length * 1000)).toFixed(1);
  }

  get rank() {
    return this.#rank;
  }
}
