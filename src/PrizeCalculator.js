import { PRIZE_CALCULATOR } from './utils/Constants.js';

class PrizeCalculator {
  #matchingTable;

  #payment;

  constructor(matchingTable, payment) {
    this.#matchingTable = matchingTable;
    this.#payment = payment;
  }

  #calculateBasicPrize() {
    let basicWinningPrize = PRIZE_CALCULATOR.defaultPrize;

    this.#matchingTable.forEach((numbersOfLotto, numbersOfMatched) => {
      const prizeAmount =
        PRIZE_CALCULATOR.amount[numbersOfMatched][PRIZE_CALCULATOR.basicTag];

      basicWinningPrize += prizeAmount * numbersOfLotto;
    });

    return basicWinningPrize;
  }

  #calculateBonusPrize() {
    const bonusWinningStandard = GLOBAL_CONSTANTS.bonusWinningStandard;
    const bonusMatched = this.#matchingTable.get(PRIZE_CALCULATOR.bonusTag);
    const prizeAmount =
      PRIZE_CALCULATOR.amount[bonusWinningStandard][PRIZE_CALCULATOR.bonusTag];

    return bonusMatched * prizeAmount;
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
