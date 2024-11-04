import ProfitCalculator from '../../src/services/ProfitCalculator.js';
import {
  GAME_SETTINGS,
  LOTTO_REWARD,
  RANK_KEYS,
} from '../../src/utils/constants.js';

describe('ProfitCalculator 클래스 테스트', () => {
  test('수익률이 올바르게 계산된다.', () => {
    // given
    const rankCounts = {
      [RANK_KEYS.THREE_MATCH]: 3,
      [RANK_KEYS.FOUR_MATCH]: 1,
      [RANK_KEYS.FIVE_MATCH]: 0,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: 1,
      [RANK_KEYS.SIX_MATCH]: 0,
    };
    const purchaseAmount = 100000;

    const expectedProfit =
      ((LOTTO_REWARD[RANK_KEYS.THREE_MATCH].prize * 3 +
        LOTTO_REWARD[RANK_KEYS.FOUR_MATCH].prize * 1 +
        LOTTO_REWARD[RANK_KEYS.FIVE_WITH_BONUS_MATCH].prize * 1) /
        purchaseAmount) *
      GAME_SETTINGS.PERCENTAGE_MULTIPLIER;

    // when
    const profitCalculator = new ProfitCalculator(rankCounts, purchaseAmount);
    const profitRate = Number(profitCalculator.profitRate);

    // then
    expect(profitRate).toBeCloseTo(expectedProfit, 1);
  });

  test('당첨금이 없을 때 수익률은 0%로 계산된다.', () => {
    // given
    const rankCounts = {
      [RANK_KEYS.THREE_MATCH]: 0,
      [RANK_KEYS.FOUR_MATCH]: 0,
      [RANK_KEYS.FIVE_MATCH]: 0,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: 0,
      [RANK_KEYS.SIX_MATCH]: 0,
    };
    const purchaseAmount = 50000;

    // when
    const profitCalculator = new ProfitCalculator(rankCounts, purchaseAmount);
    const profitRate = profitCalculator.profitRate;

    // then
    expect(profitRate).toBe('0.0');
  });
});
