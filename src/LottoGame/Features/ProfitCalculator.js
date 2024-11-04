import GameUtils from "../Utils/GameUtils.js";

class ProfitCalculator {
  #profit;

  constructor(price, results) {
    let prizeSum = this.#calculatePrize(results);
    this.#profit = this.#calculateProfit(prizeSum, price);
  }

  #calculatePrize(results) {
    let prizeSum = 0;
    for (let result of results) {
      if (result.count === 0) {
        continue;
      }
      let rankInfo = GameUtils.findInformation(result.rank);
      let prize = rankInfo.prize * result.count;
      prizeSum += prize;
    }

    return prizeSum;
  }

  #calculateProfit(prizeSum, price) {
    let profit = (prizeSum / price) * 100;

    return profit.toFixed(1);
  }

  getProfit() {
    return `${this.#profit}%`;
  }
}

export default ProfitCalculator;
