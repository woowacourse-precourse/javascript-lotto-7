import { PRIZE_CALCULATOR } from './Constants.js';

class PrizeCalculator {
  #winningTable;

  #payment;

  constructor(winningTable, payment) {
    this.#winningTable = winningTable;
    this.#payment = payment;
  }

  #calculatePrize() {
    let winningPrize = PRIZE_CALCULATOR.defaultPrize;

    this.#winningTable.forEach((numbersOfLotto, numbersOfMatched) => {
      const prizeAmount = PRIZE_CALCULATOR.amount[numbersOfMatched];
      winningPrize += prizeAmount * numbersOfLotto;
    });

    return winningPrize;
  }

  #calculateProfit(totalPrize) {
    const profit = (totalPrize * PRIZE_CALCULATOR.profitRatio) / this.#payment;

    return profit;
  }

  static #parseProfit(profit) {
    const roundingProfit = profit.toFixed(PRIZE_CALCULATOR.profitDecimalPlace);
    return Number(roundingProfit);
  }

  getProfit() {
    const totalPrize = this.#calculatePrize();
    const profit = this.#calculateProfit(totalPrize);
    const parsedProfit = PrizeCalculator.#parseProfit(profit);
    return parsedProfit;
  }
}

export default PrizeCalculator;
