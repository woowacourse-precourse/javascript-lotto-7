import { PRIZE_CALCULATOR } from './utils/Constants.js';

class PrizeCalculator {
  #matchingTable;

  #payment;

  constructor(matchingTable, payment) {
    this.#matchingTable = matchingTable;
    this.#payment = payment;
  }

  #calculateBasicPrize() {
    const { defaultPrize, basicTag, prize } = PRIZE_CALCULATOR;
    let basicWinningPrize = defaultPrize;

    this.#matchingTable.forEach((numbersOfLotto, numbersOfMatched) => {
      const prizeAmount = prize[numbersOfMatched][basicTag];

      basicWinningPrize += prizeAmount * numbersOfLotto;
    });

    return basicWinningPrize;
  }

  #calculateBonusPrize() {
    const { bonusWinningStandard, bonusTag, prize } = PRIZE_CALCULATOR;
    const bonusMatched = this.#matchingTable.get(bonusTag);
    const prizeAmount = prize[bonusWinningStandard][bonusTag];

    return bonusMatched * prizeAmount;
  }

  #calculatePrize() {
    const basicPrize = this.#calculateBasicPrize();
    const bonusPrize = this.#calculateBonusPrize();

    return basicPrize + bonusPrize;
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
