import { LOTTO_REWARD } from '../utils/constants.js';

export default function calculateProfitRate(rankCounts, purchaseAmount) {
  const profit = Object.keys(rankCounts).reduce((acc, key) => {
    return acc + rankCounts[key] * LOTTO_REWARD[key].prize;
  }, 0);

  return ((profit / purchaseAmount) * 100).toFixed(2);
}
