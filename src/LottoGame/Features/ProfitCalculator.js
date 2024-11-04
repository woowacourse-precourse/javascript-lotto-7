import { findInformation } from "../Utils/LottoInformation";

class ProfitCalculator {
  #profit;

  constructor(price, results) {
    let prizeSum = this.#calculatePrize(results);
    this.#profit = this.#calculateProfit(prizeSum, price);
  }

  #calculatePrize(results) {
    let prizeSum = 0;
    for (let result of results) {
      let rankInfo = findInformation(result.rank).prize;
      let prize = rankInfo * result.count;
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
