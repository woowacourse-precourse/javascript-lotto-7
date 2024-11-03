import { GAME_SETTINGS, LOTTO_REWARD } from '../utils/constants.js';

class ProfitCalculator {
  #rankCounts;
  #purchaseAmount;

  constructor(rankCounts, purchaseAmount) {
    this.#rankCounts = rankCounts;
    this.#purchaseAmount = purchaseAmount;
  }

  get profitRate() {
    const profit = Object.entries(this.#rankCounts).reduce(
      (acc, [key, value]) => {
        return acc + value * LOTTO_REWARD[key].prize;
      },
      GAME_SETTINGS.ZERO
    );

    return (
      (profit / this.#purchaseAmount) *
      GAME_SETTINGS.PERCENTAGE_MULTIPLIER
    ).toFixed(GAME_SETTINGS.DECIMAL_PLACES);
  }
}

export default ProfitCalculator;
