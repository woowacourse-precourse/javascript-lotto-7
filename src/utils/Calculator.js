import {
  DECIMAL_POINT,
  NONE,
  PERCENTAGE_FACTOR,
  RANKING,
  RANKINGS,
  LOTTO,
} from "../constants/Constants.js";

export class Calculator {
  static returnRate(purchaseAmount, prizeAmount) {
    return parseFloat(
      ((prizeAmount / purchaseAmount) * PERCENTAGE_FACTOR).toFixed(
        DECIMAL_POINT
      )
    );
  }

  static ranking(correctNumber, correctBonusNumber) {
    for (let ranking = RANKING.FIRST; ranking <= RANKING.LAST; ranking++) {
      if (
        correctNumber === RANKINGS[ranking].MATCH &&
        correctBonusNumber === RANKINGS[ranking].BONUS
      ) {
        return ranking;
      }
    }
    return false;
  }

  static totalPrize(rankings) {
    let prize = NONE;

    Object.entries(rankings).forEach(([ranking, count]) => {
      if (RANKINGS[ranking]) prize += RANKINGS[ranking].PRIZE * count;
    });

    return prize;
  }

  static totalIssuance(purchaseAmount) {
    return purchaseAmount / LOTTO.PRICE;
  }

  static sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}
