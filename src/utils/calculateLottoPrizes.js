import { PROFIT_RATE, WINNING_RANK } from '../constants/lottoConstants.js';
import { LOTTO_PRIZES } from '../constants/lottoPrize.js';

export const calculateTotalPrize = (statistics) => {
  const ranks = Object.values(WINNING_RANK);

  return ranks.reduce(
    (total, rank) => total + statistics[rank].count * LOTTO_PRIZES[rank].prize,
    0,
  );
};

export const calculateProfitRate = (totalPrize, purchaseAmount) => {
  const profitRate = (totalPrize / purchaseAmount) * PROFIT_RATE.HUNDRED;
  return Math.round(profitRate * PROFIT_RATE.TEN) / PROFIT_RATE.TEN;
};
