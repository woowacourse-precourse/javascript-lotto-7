import LottoRevenueCalculator from '../src/classes/LottoRevenueCalculator.js';
import LottoChecker from '../src/classes/LottoChecker.js';

describe('LottoRevenueCalculator 클래스 테스트', () => {
  test('calculateYield 메서드가 총 수익률을 올바르게 계산한다.', () => {
    const totalSpent = 5000; // 5개의 로또 구매 금액
    const winningResults = [0, 1, 0, 2, 1]; // 2등 1개, 4등 2개, 5등 1개

    const expectedTotalPrize =
      LottoChecker.PRIZE_TIERS[1].prize * 1 +
      LottoChecker.PRIZE_TIERS[3].prize * 2 +
      LottoChecker.PRIZE_TIERS[4].prize * 1;

    const expectedYield = parseFloat(
      ((expectedTotalPrize / totalSpent) * 100).toFixed(2)
    );

    const result = LottoRevenueCalculator.calculateYield(totalSpent, winningResults);

    expect(result).toBe(expectedYield);
  });
});
