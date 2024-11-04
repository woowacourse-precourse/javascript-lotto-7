import ProfitCalculator from '../../src/controllers/ProfitCalculator.js';
import { GAME_SETTINGS, LOTTO_REWARD } from '../../src/utils/constants.js';

describe.skip('ProfitCalculator 클래스 테스트', () => {
  test('수익률이 올바르게 계산된다.', () => {
    const rankCounts = {
      threeMatch: 3,
      fourMatch: 1,
      fiveMatch: 0,
      fiveWithBonusMatch: 1,
      sixMatch: 0,
    };
    const purchaseAmount = 100000;

    const expectedProfit =
      ((LOTTO_REWARD.threeMatch.prize * 3 +
        LOTTO_REWARD.fourMatch.prize * 1 +
        LOTTO_REWARD.fiveWithBonusMatch.prize * 1) /
        purchaseAmount) *
      GAME_SETTINGS.PERCENTAGE_MULTIPLIER;

    const profitRate = ProfitCalculator.calculateProfitRate(
      rankCounts,
      purchaseAmount
    );

    expect(Number(profitRate)).toBeCloseTo(expectedProfit, 1);
  });

  test('당첨금이 없을 때 수익률은 0%로 계산된다.', () => {
    const rankCounts = {
      threeMatch: 0,
      fourMatch: 0,
      fiveMatch: 0,
      fiveWithBonusMatch: 0,
      sixMatch: 0,
    };
    const purchaseAmount = 50000;

    const profitRate = ProfitCalculator.calculateProfitRate(
      rankCounts,
      purchaseAmount
    );

    expect(profitRate).toBe('0.0');
  });
});
