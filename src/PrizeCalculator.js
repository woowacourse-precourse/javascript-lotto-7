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
    const profit =
      ((totalPrize - this.#payment) * PRIZE_CALCULATOR.profitRatio) /
      this.#payment;

    return profit;
  }
}

export default PrizeCalculator;
