import LottoCalculate from '../src/utils/LottoCalculate.js';
import { LOTTO_EARNINGS } from '../src/constants/lottoNumbers.js';

describe('로또 수익률 계산', () => {
  const LOTTO_CALCULATE = new LottoCalculate(LOTTO_EARNINGS);

  test.each([
    [{ 3: 1, 4: 0, 5: { count: 0, bonus: 0 }, 6: 1 }, 2000, '100,000,250.0'],
    [{ 3: 1, 4: 1, 5: { count: 1, bonus: 0 }, 6: 0 }, 4000, '38,875.0'],
  ])('수익률 계산 - %o', (statistics, totalSpent, expectedRate) => {
    const RATE = LOTTO_CALCULATE.calculateRate(statistics, totalSpent);
    expect(RATE).toBe(expectedRate);
  });
});
