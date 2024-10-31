import { calculateWinningAmount } from './winningStatisticsUtils.js';

const produceRateOfReturn = (purchasePrice) => {
  const winningAmount = calculateWinningAmount();
  const rateOfReturn = ((winningAmount / purchasePrice) * 100).toFixed(2);

  return rateOfReturn;
};

export { produceRateOfReturn };
