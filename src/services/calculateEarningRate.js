import {
  LOTTO_PRIZE_AMOUNTS,
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

  const earningRate = (totalPrizeAmount / purchaseAmount) * 100;
  const roundedEarningRate = Math.round(earningRate * 100) / 100;
  return TOTAL_EARNING_RATE(roundedEarningRate);
};
