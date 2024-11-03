const RANK_MONEY = Object.freeze({
  FIFTH_RANK: 5000,
  FOURTH_RANK: 50000,
  THIRD_RANK: 1500000,
  SECOND_RANK: 30000000,
  FIRST_RANK: 2000000000,
});

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
    const notSplitProfit = ((this.#winningMoney / initialMoney) * 100).toFixed(1);
    this.#profit = notSplitProfit.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  getProfit() {
    return this.#profit;
  }
}

export default Profit;
