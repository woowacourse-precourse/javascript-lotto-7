import { PRIZES } from '../constants/prizes.js';

class Prize {
  /**
   * 당첨 결과 객체를 받아 총 상금을 계산합니다.
   * @param {Object} result - 당첨 결과 객체
   * @returns {number} - 총 수익 (totalPrize)
   */
  static calculateTotalPrize(result) {
    let totalPrize = 0;

    totalPrize += result.match3 * PRIZES.match3;
    totalPrize += result.match4 * PRIZES.match4;
    totalPrize += result.match5 * PRIZES.match5;
    totalPrize += result.match5PlusBonus * PRIZES.match5PlusBonus;
    totalPrize += result.match6 * PRIZES.match6;

    return totalPrize;
  }
}

export default Prize;
