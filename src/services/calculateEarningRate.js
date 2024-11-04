import {
  LOTTO_PRIZE_AMOUNTS,
  PERCENTAGE_FACTOR,
  ROUNDED_DECIMAL_PLACES,
  TOTAL_EARNING_RATE,
} from "../constants/resultConstants.js";

export const calculateEarningRate = function (purchaseAmount, winningDetails) {
  let totalPrizeAmount = 0;

  winningDetails.forEach((count, index) => {
    switch (index) {
      case 0:
        totalPrizeAmount += LOTTO_PRIZE_AMOUNTS.FIFTH_PRIZE * count;
        break;
      case 1:
        totalPrizeAmount += LOTTO_PRIZE_AMOUNTS.FOURTH_PRIZE * count;
        break;
      case 2:
        totalPrizeAmount += LOTTO_PRIZE_AMOUNTS.THIRD_PRIZE * count;
        break;
      case 3:
        totalPrizeAmount += LOTTO_PRIZE_AMOUNTS.SECOND_PRIZE * count;
        break;
      case 4:
        totalPrizeAmount += LOTTO_PRIZE_AMOUNTS.FIRST_PRIZE * count;
        break;
      default:
        break;
    }
  });

  const earningRate = (totalPrizeAmount / purchaseAmount) * PERCENTAGE_FACTOR;
  const roundedEarningRate =
    Math.round(earningRate * ROUNDED_DECIMAL_PLACES) / ROUNDED_DECIMAL_PLACES;
  return TOTAL_EARNING_RATE(roundedEarningRate);
};
