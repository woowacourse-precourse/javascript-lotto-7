import {
  calculateProfitRate,
  calculateTotalPrize,
} from '../src/utils/calculateLottoPrizes.js';

describe('로또 당첨금 계산', () => {
  describe('단일 등수 당첨금 계산', () => {
    test('5등(3개 일치) 1회 당첨 시 5,000원을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics[3].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(5000);
    });

    test('4등(4개 일치) 1회 당첨 시 50,000원을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics[4].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(50000);
    });

    test('3등(5개 일치) 1회 당첨 시 1,500,000원을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics[5].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(1500000);
    });

    test('2등(5개+보너스 일치) 1회 당첨 시 30,000,000원을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics['5+bonus'].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(30000000);
    });

    test('1등(6개 일치) 1회 당첨 시 2,000,000,000원을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics[6].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(2000000000);
    });
  });

  describe('복수 당첨 시 당첨금 계산', () => {
    test('같은 등수 여러번 당첨 시 당첨금의 합을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics[3].count = 2;

      expect(calculateTotalPrize(statistics)).toBe(10000);
    });

    test('서로 다른 등수 당첨 시 당첨금의 합을 반환한다', () => {
      const statistics = createEmptyStatistics();
      statistics[3].count = 1;
      statistics[4].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(55000);
    });
  });

  describe('수익률 계산', () => {
    test('당첨금과 구매금액이 같으면 수익률은 100%이다', () => {
      const profitRate = calculateProfitRate(1000, 1000);
      expect(profitRate).toBe(100.0);
    });

    test('당첨금이 구매금액의 2배면 수익률은 200%이다', () => {
      const profitRate = calculateProfitRate(10000, 5000);
      expect(profitRate).toBe(200.0);
    });

    test('당첨금이 구매금액의 절반이면 수익률은 50%이다', () => {
      const profitRate = calculateProfitRate(5000, 10000);
      expect(profitRate).toBe(50.0);
    });

    test('당첨금이 0원이면 수익률은 0%이다', () => {
      const profitRate = calculateProfitRate(0, 10000);
      expect(profitRate).toBe(0.0);
    });

    test('수익률은 소수점 첫째 자리에서 반올림한다', () => {
      const profitRate = calculateProfitRate(5555, 10000); // 55.55%
      expect(profitRate).toBe(55.6);
    });
  });
});

function createEmptyStatistics() {
  return {
    3: { count: 0, prize: 5000 },
    4: { count: 0, prize: 50000 },
    5: { count: 0, prize: 1500000 },
    '5+bonus': { count: 0, prize: 30000000 },
    6: { count: 0, prize: 2000000000 },
  };
}
