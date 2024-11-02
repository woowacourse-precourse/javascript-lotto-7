import { lottoReward } from './path/to/lottoRewardFile.js';

export default function calculateProfitRate(rankCounts, purchaseAmount) {
  const profit = Object.keys(rankCounts).reduce((acc, key) => {
    return acc + rankCounts[key] * lottoReward[key].prize;
  }, 0);

  return ((profit / purchaseAmount) * 100).toFixed(2);
}
