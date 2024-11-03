import {
  calculateProfitRate,
  calculateTotalPrize,
} from '../src/utils/calculateLottoPrizes.js';
import { LOTTO_PRIZES } from '../src/constants/lottoPrize.js';
import { LOTTO_PRIZES_TEST_MESSAGES } from '../src/constants/testMessages.js';

describe(LOTTO_PRIZES_TEST_MESSAGES.LOTTO_PRIZES_TEST, () => {
  describe(LOTTO_PRIZES_TEST_MESSAGES.DESCRIBE_MESSAGES.SINGLE_PRIZE, () => {
    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_SINGLE_PRIZES.FIFTH, () => {
      const statistics = createEmptyStatistics();
      statistics[3].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(LOTTO_PRIZES[3].prize);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_SINGLE_PRIZES.FOURTH, () => {
      const statistics = createEmptyStatistics();
      statistics[4].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(LOTTO_PRIZES[4].prize);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_SINGLE_PRIZES.THIRD, () => {
      const statistics = createEmptyStatistics();
      statistics[5].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(LOTTO_PRIZES[5].prize);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_SINGLE_PRIZES.SECOND, () => {
      const statistics = createEmptyStatistics();
      statistics['5+bonus'].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(
        LOTTO_PRIZES['5+bonus'].prize,
      );
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_SINGLE_PRIZES.FIRST, () => {
      const statistics = createEmptyStatistics();
      statistics[6].count = 1;

      expect(calculateTotalPrize(statistics)).toBe(LOTTO_PRIZES[6].prize);
    });
  });

  describe(LOTTO_PRIZES_TEST_MESSAGES.DESCRIBE_MESSAGES.MULTIPLE_PRIZE, () => {
    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_MULTIPLE_PRIZES.SAME_RANK, () => {
      const statistics = createEmptyStatistics();
      statistics[3].count = 2;

      expect(calculateTotalPrize(statistics)).toBe(LOTTO_PRIZES[3].prize * 2);
    });

    test(
      LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_MULTIPLE_PRIZES.DIFFERENT_RANK,
      () => {
        const statistics = createEmptyStatistics();
        statistics[3].count = 1;
        statistics[4].count = 1;

        expect(calculateTotalPrize(statistics)).toBe(
          LOTTO_PRIZES[3].prize + LOTTO_PRIZES[4].prize,
        );
      },
    );
  });

  describe(LOTTO_PRIZES_TEST_MESSAGES.DESCRIBE_MESSAGES.PROFIT_RATE, () => {
    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_PROFIT_RATE.EQUAL, () => {
      const profitRate = calculateProfitRate(1000, 1000);
      expect(profitRate).toBe(100.0);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_PROFIT_RATE.DOUBLE, () => {
      const profitRate = calculateProfitRate(10000, 5000);
      expect(profitRate).toBe(200.0);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_PROFIT_RATE.HALF, () => {
      const profitRate = calculateProfitRate(5000, 10000);
      expect(profitRate).toBe(50.0);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_PROFIT_RATE.ZERO, () => {
      const profitRate = calculateProfitRate(0, 10000);
      expect(profitRate).toBe(0.0);
    });

    test(LOTTO_PRIZES_TEST_MESSAGES.CALCULATE_PROFIT_RATE.ROUND, () => {
      const profitRate = calculateProfitRate(5555, 10000);
      expect(profitRate).toBe(55.6);
    });
  });
});

function createEmptyStatistics() {
  return {
    3: { count: 0, prize: LOTTO_PRIZES[3].prize },
    4: { count: 0, prize: LOTTO_PRIZES[4].prize },
    5: { count: 0, prize: LOTTO_PRIZES[5].prize },
    '5+bonus': { count: 0, prize: LOTTO_PRIZES['5+bonus'].prize },
    6: { count: 0, prize: LOTTO_PRIZES[6].prize },
  };
}
