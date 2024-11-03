import { PRIZE_CRITERIA } from "../constants/gameRule.js";

class PrizeCalculator {
  #results;
  #totalPrize;

  constructor(results) {
    this.#results = results;
    this.#totalPrize = this.#calculateTotalPrize();
  }

  getTotalPrize() {
    return this.#totalPrize;
  }

  #calculateTotalPrize() {
    const prizes = this.#results.map(result => this.#calculatePrize(result));
    return this.#sumPrizes(prizes);
  }

  #calculatePrize(result) {
    const { matchCount, isBonusMatched } = result;
    return this.#findPrizeAmount(matchCount, isBonusMatched);
  }

  #findPrizeAmount(matchCount, isBonusMatched) {
    const matchedCriteria = PRIZE_CRITERIA.find(
      criteria => criteria.matchCount === matchCount && criteria.isBonusMatched === isBonusMatched
    );
  
    if (matchedCriteria) return matchedCriteria.prize;
    return 0;
  }

  #sumPrizes(prizes) {
    return prizes.reduce((total, prize) => total + prize, 0);
  }
}

export default PrizeCalculator;