import { REWARD_PRIZES } from "../config/constants.js";

export default class CalculateTotalReturn {
  constructor(purchaseAmount, rankingCount) {
    this.purchaseAmount = purchaseAmount;
    this.rankingCount = rankingCount;
  }

  calculateTotalWinnings() {
    return this.rankingCount.reduce((total, count, index) => {
      return total + count * REWARD_PRIZES[index];
    }, 0);
  }

  calculateReturnRate() {
    const totalWinnings = this.calculateTotalWinnings();
    let returnRate = (totalWinnings / this.purchaseAmount) * 100;

    // 소수 둘째 자리에서 반올림
    returnRate = Math.round(returnRate * 100) / 100;

    // 소수점이 없는 경우 소수 첫째 자리에 .0 추가
    return returnRate % 1 === 0 ? `${returnRate}.0` : returnRate.toString();
  }
}
