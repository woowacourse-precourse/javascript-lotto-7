import { GAME_SETTINGS, LOTTO_REWARD } from '../utils/constants.js';

export default function calculateProfitRate(rankCounts, purchaseAmount) {
  const profit = Object.keys(rankCounts).reduce((acc, key) => {
    return acc + rankCounts[key] * LOTTO_REWARD[key].prize;
  }, GAME_SETTINGS.ZERO);

  return (
    (profit / purchaseAmount) *
    GAME_SETTINGS.PERCENTAGE_MULTIPLIER
  ).toFixed(GAME_SETTINGS.DECIMAL_PLACES);
}
