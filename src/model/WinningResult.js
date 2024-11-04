import { PRICE } from "../constant/lotto.js";

export class WinningResult {
  constructor() {
    this.totalWinning = [0, 0, 0, 0, 0];
  }

  storeTotalWinning(winningNumber, isBonus) {
    if (winningNumber < 3) {
      return;
    }
    if (winningNumber === 5 && isBonus) {
      this.totalWinning[3] += 1;
    } else if (winningNumber === 6) {
      this.totalWinning[5] += 1;
    } else {
      this.totalWinning[winningNumber - 3] += 1;
    }
  }

  getReturnRate(purchaseAmount) {
    return (
      (this.totalWinning.reduce(
        (acc, current, index) => acc + current * PRICE[index],
        0,
      ) /
        purchaseAmount) *
      100
    );
  }
}
