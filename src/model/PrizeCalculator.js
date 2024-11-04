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

    /**
   * 총 상금을 반환하는 메서드
   * @returns {number} 총 상금
   */
  getTotalPrize() {
    return this.#totalPrize;
  }

    /**
   * 각 등수에 대한 통계를 반환하는 메서드
   * @returns {object} 당첨 통계 객체
   * @example
   * // 예시 반환 형태
   * {
   *   1: { count: 2, prize: 4000000000 }, // 1등에 당첨된 개수와 총 상금
   *   2: { count: 1, prize: 30000000 },    // 2등에 당첨된 개수와 총 상금
   *   3: { count: 0, prize: 0 },           // 3등에 당첨된 개수와 총 상금
   *   4: { count: 5, prize: 250000 },      // 4등에 당첨된 개수와 총 상금
   *   5: { count: 10, prize: 50000 }       // 5등에 당첨된 개수와 총 상금
   * }
   */
  getStatistics() {
    return this.#statistics;
  }

  #calculateStatistics() {
    const statistics = this.#initializeStatistics();
    this.#processUpdateStatistics(statistics);
    return statistics;
  }

  #initializeStatistics() {
    return Object.fromEntries(
      Object.values(PRIZE_CRITERIA).map(({ rank }) => [rank, { count: 0, prize: 0 }])
    );
  }

  #processUpdateStatistics(statistics) {
    this.#results.forEach(result => {
      const matchedCriteria = this.#getMatchedCriteria(result);
      if (matchedCriteria) this.#updateStatistics(statistics, matchedCriteria);
    });
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
