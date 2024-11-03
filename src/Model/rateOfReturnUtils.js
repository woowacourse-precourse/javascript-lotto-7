import { WinningStatistics } from './winningStatisticsUtils.js';

export const produceRateOfReturn = (purchasePrice) => {
  const winningAmount = new WinningStatistics().calculateWinningAmount();
  const rateOfReturn = ((winningAmount / purchasePrice) * 100).toFixed(1);
  return rateOfReturn;
};
