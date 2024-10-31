import { calculateWinningAmount } from './winningStatistics.js';

const produceRateOfReturn = (purchasePrice) => {
  const winningAmount = calculateWinningAmount();
  const rateOfReturn = (winningAmount / purchasePrice) * 100;

  return rateOfReturn;
};

export { produceRateOfReturn };
