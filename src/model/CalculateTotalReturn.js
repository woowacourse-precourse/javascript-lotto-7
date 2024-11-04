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
    returnRate = Math.round(returnRate * 100) / 100;
    return returnRate % 1 === 0 ? `${returnRate}.0` : returnRate.toString();
  }
}
