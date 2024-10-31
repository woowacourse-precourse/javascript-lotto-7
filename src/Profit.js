import { RANK_MONEY } from './constants/magicNumber.js';

class Profit {
  #winningMoney;
  #profit;

  constructor(initialMoney, rankCounter) {
    this.#winningMoney = 0;
    this.#calculateEntireRank(rankCounter);
    this.#calculateProfit(initialMoney);
  }

  #calculateEntireRank(rankCounter) {
    rankCounter.forEach((count, index) => {
      this.#calculateRank(Object.values(RANK_MONEY)[index], count);
    });
  }

  #calculateRank(rankMoney, count) {
    const money = rankMoney * count;
    this.#winningMoney += money;
  }

  #calculateProfit(initialMoney) {
    this.#profit = Number(
      ((this.#winningMoney / initialMoney) * 100).toFixed(1),
    );
  }

  getProfit() {
    return this.#profit;
  }
}

export default Profit;
