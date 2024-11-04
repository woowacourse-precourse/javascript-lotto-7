import { TOTAL_EARNING_RATE } from "../constants/resultConstants.js";

export const calculateEarningRate = function (purchaseAmount, winningDetails) {
  let totalPrizeAmount = 0;

  winningDetails.forEach((count, index) => {
    switch (index) {
      case 0:
        totalPrizeAmount += 5000 * count;
        break;
      case 1:
        totalPrizeAmount += 50000 * count;
        break;
      case 2:
        totalPrizeAmount += 1500000 * count;
        break;
      case 3:
        totalPrizeAmount += 30000000 * count;
        break;
      case 4:
        totalPrizeAmount += 2000000000 * count;
        break;
      default:
        break;
    }
  });

  const earningRate = (totalPrizeAmount / purchaseAmount) * 100;
  const roundedEarningRate = Math.round(earningRate * 100) / 100;
  return TOTAL_EARNING_RATE(roundedEarningRate);
};
