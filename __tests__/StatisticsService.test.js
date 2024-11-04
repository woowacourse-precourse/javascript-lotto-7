import StatisticsService from '../src/Services/StatisticsService.js';
import RANKS from '../src/Model/Rank.js';

describe('StatisticsService', () => {
  let statisticsService;

  beforeEach(() => {
    statisticsService = new StatisticsService();
  });

  describe('calculateTotalRevenue', () => {
    it('랭크별 티켓 수와 상금을 사용하여 총 수익을 올바르게 계산해야 합니다.', () => {
      const rankCounts = {
        [RANKS.SIX_MATCH.key]: { ticket: 1, prize: RANKS.SIX_MATCH.prize },
        [RANKS.FIVE_MATCH.key]: { ticket: 2, prize: RANKS.FIVE_MATCH.prize },
        [RANKS.FOUR_MATCH.key]: { ticket: 3, prize: RANKS.FOUR_MATCH.prize },
      };

      const totalRevenue = statisticsService.calculateTotalRevenue(rankCounts);
      expect(totalRevenue).toBe(
        1 * RANKS.SIX_MATCH.prize +
          2 * RANKS.FIVE_MATCH.prize +
          3 * RANKS.FOUR_MATCH.prize,
      );
    });
  });

  describe('truncateRate', () => {
    it('수익률을 소수점 둘째 자리까지만 절삭해야 합니다.', () => {
      const revenueRate = 87.9876;
      const truncatedRate = statisticsService.truncateRate(revenueRate);
      expect(truncatedRate).toBe(87.98);
    });

    it('이미 절삭된 값일 경우 그대로 반환해야 합니다.', () => {
      const revenueRate = 75.25;
      const truncatedRate = statisticsService.truncateRate(revenueRate);
      expect(truncatedRate).toBe(75.25);
    });
    it('이미 절삭된 값일 경우 그대로 반환해야 합니다.', () => {
      const revenueRate = 120;
      const truncatedRate = statisticsService.truncateRate(revenueRate);
      expect(truncatedRate).toBe(120);
    });
  });

  describe('calculateRevenueRate', () => {
    it('총 수익과 지불 금액을 기준으로 수익률을 계산하고 소수점 둘째 자리까지 절삭해야 합니다.', () => {
      const totalRevenue = 15000;
      const paidAmount = 10000;

      const revenueRate = statisticsService.calculateRevenueRate(
        totalRevenue,
        paidAmount,
      );
      expect(revenueRate).toBe(150);
    });
  });
});
