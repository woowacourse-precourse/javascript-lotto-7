import { PRIZE_CRITERIA } from "../constants/gameRule.js";

class PrizeCalculator {
  #results;
  #statistics;
  #totalPrize;

  constructor(results) {
    this.#results = results;
    this.#statistics = this.#calculateStatistics();
    this.#totalPrize = this.#calculateTotalPrize();
  }

  getTotalPrize() {
    return this.#totalPrize;
  }

  getStatistics() {
    return this.#statistics;
  }

  #calculateStatistics() {
    const statistics = this.#initializeStatistics();
    this.#results.forEach(result => {
      const matchedCriteria = this.#getMatchedCriteria(result);
      if (matchedCriteria) this.#updateStatistics(statistics, matchedCriteria);
    });
    return statistics;
  }

  #initializeStatistics() {
    return Object.fromEntries(
      Object.values(PRIZE_CRITERIA).map(({ rank }) => [rank, { count: 0, prize: 0 }])
    );
  }

  #getMatchedCriteria({ matchCount, isBonusMatched }) {
    return Object.values(PRIZE_CRITERIA).find(
      criteria => criteria.matchCount === matchCount && criteria.isBonusMatched === isBonusMatched
    );
  }

  #updateStatistics(statistics, { rank, prize }) {
    statistics[rank].count += 1;
    statistics[rank].prize += prize;
  }

  #calculateTotalPrize() {
    return Object.values(this.#statistics).reduce((total, { prize }) => total + prize, 0);
  }
}

export default PrizeCalculator;
