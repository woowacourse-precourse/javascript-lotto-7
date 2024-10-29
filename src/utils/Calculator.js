import { PRIZE } from "../constants/Constants";

export class Calculator {
  static prizeAmount(rankings) {
    return rankings.reduce((cumulative, ranking) => {
      return cumulative + PRIZE[ranking];
    }, 0);
  }

  static returnRate(purchaseAmount, prizeAmount) {
    return (prizeAmount / purchaseAmount) * 100;
  }
}
