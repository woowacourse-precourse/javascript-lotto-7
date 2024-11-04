import { calTotalPrize } from '../src/util/calculators/calTotalPrize.js';
import { MagicNumber } from '../src/constants/MagicNumber.js';

function calExpectedPrize(matchCounts) {
  return (
    matchCounts.MATCH_3 * MagicNumber.MATCH_3_PRIZE +
    matchCounts.MATCH_4 * MagicNumber.MATCH_4_PRIZE +
    matchCounts.MATCH_5 * MagicNumber.MATCH_5_PRIZE +
    matchCounts.MATCH_5_BONUS * MagicNumber.MATCH_5_BONUS_PRIZE +
    matchCounts.MATCH_6 * MagicNumber.MATCH_6_PRIZE
  );
}

describe('calTotalPrize', () => {
  test('각 당첨 개수 일치에 따라 전체 상금 계산할 수 있다.', () => {
    const matchCounts = {
      MATCH_3: 1,
      MATCH_4: 2,
      MATCH_5: 1,
      MATCH_5_BONUS: 1,
      MATCH_6: 0,
    };
    const totalPrize = calTotalPrize(matchCounts);
    const expectedPrize = calExpectedPrize(matchCounts);

    expect(totalPrize).toBe(expectedPrize);
  });
});
