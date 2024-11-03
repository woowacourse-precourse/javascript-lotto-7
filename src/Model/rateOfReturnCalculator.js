import { matchCount } from './winningStatisticsCalculator.js';

const calculateWinningAmount = () => {
  const winningAmount =
    matchCount.threeMatch * 5000 +
    matchCount.fourMatch * 50000 +
    matchCount.fiveMatch * 1500000 +
    matchCount.fiveAndBonusMatch * 30000000 +
    matchCount.sixMatch * 2000000000;

  return winningAmount;
};

export const calculateRateOfReturn = (purchasePrice) => {
  const winningAmount = calculateWinningAmount();
  const rateOfReturn = ((winningAmount / purchasePrice) * 100).toFixed(1);
  
  return rateOfReturn;
};