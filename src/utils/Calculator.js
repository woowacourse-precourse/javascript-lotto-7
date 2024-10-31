import { PRIZE } from "../constants/Constants.js";

export class Calculator {
  static prizeAmount(rankings) {
    return rankings.reduce((cumulative, ranking) => {
      return cumulative + PRIZE[ranking];
    }, 0);
  }

  static returnRate(purchaseAmount, prizeAmount) {
    return (prizeAmount / purchaseAmount) * 100;
  }

  static ranking(correctNumber, correctBonusNumber) {
    if (correctNumber === 6) return 1;
    if (correctNumber === 5 && correctBonusNumber === true) return 2;
    if (correctNumber === 5) return 3;
    if (correctNumber === 4) return 4;
    if (correctNumber === 3) return 5;
    return false;
  }
}
