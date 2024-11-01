import { PRIZE_CALCULATOR } from './Constants.js';

class PrizeCalculator {
  #winningTable;

  constructor(winningTable) {
    this.#winningTable = winningTable;
  }

  calculatePrize() {
    let winningPrize = PRIZE_CALCULATOR.defaultPrize;

    this.#winningTable.forEach((numbersOfLotto, numbersOfMatched) => {
      const prizeAmount = PRIZE_CALCULATOR.amount[numbersOfMatched];
      winningPrize += prizeAmount * numbersOfLotto;
    });

    return winningPrize;
  }
}

export default PrizeCalculator;
