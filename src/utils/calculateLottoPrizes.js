import { LOTTO_PRIZES } from '../constants/lottoPrize.js';

export const calculateTotalPrize = (statistics) => {
  let totalPrize = 0;

  totalPrize += statistics[3].count * LOTTO_PRIZES[3].prize;
  totalPrize += statistics[4].count * LOTTO_PRIZES[4].prize;
  totalPrize += statistics[5].count * LOTTO_PRIZES[5].prize;
  totalPrize += statistics['5+bonus'].count * LOTTO_PRIZES['5+bonus'].prize;
  totalPrize += statistics[6].count * LOTTO_PRIZES[6].prize;

  return totalPrize;
};

export const calculateProfitRate = (totalPrize, purchaseAmount) => {
  const profitRate = (totalPrize / purchaseAmount) * 100;
  return Math.round(profitRate * 10) / 10;
};
