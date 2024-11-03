import { calculateLottoStatistics } from '../src/utils/calculateLottoStatistics.js';
import { LOTTO_STATISTICS_TEST_MESSAGES } from '../src/constants/testMessages.js';
import { TEST_MATCH_RESULTS } from '../src/constants/testValues.js';

describe(LOTTO_STATISTICS_TEST_MESSAGES.LOTTO_STATISTICS_TEST, () => {
  test(LOTTO_STATISTICS_TEST_MESSAGES.FIFTH_RANK, () => {
    const matchResults = TEST_MATCH_RESULTS.FIFTH_RANK;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(1);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.FOURTH_RANK, () => {
    const matchResults = TEST_MATCH_RESULTS.FOURTH_RANK;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[4].count).toBe(1);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.THIRD_RANK, () => {
    const matchResults = TEST_MATCH_RESULTS.THIRD_RANK;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[5].count).toBe(1);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.SECOND_RANK, () => {
    const matchResults = TEST_MATCH_RESULTS.SECOND_RANK;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics['5+bonus'].count).toBe(1);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.FIRST_RANK, () => {
    const matchResults = TEST_MATCH_RESULTS.FIRST_RANK;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[6].count).toBe(1);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.NO_RANK, () => {
    const matchResults = TEST_MATCH_RESULTS.NO_WINS;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(0);
    expect(statistics[4].count).toBe(0);
    expect(statistics[5].count).toBe(0);
    expect(statistics['5+bonus'].count).toBe(0);
    expect(statistics[6].count).toBe(0);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.MULTIPLE_RANKS, () => {
    const matchResults = TEST_MATCH_RESULTS.MULTIPLE_WINS;
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(2);
    expect(statistics[4].count).toBe(1);
    expect(statistics[5].count).toBe(0);
    expect(statistics['5+bonus'].count).toBe(1);
    expect(statistics[6].count).toBe(0);
  });

  test(LOTTO_STATISTICS_TEST_MESSAGES.NO_WINNERS, () => {
    const matchResults = [];
    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(0);
    expect(statistics[4].count).toBe(0);
    expect(statistics[5].count).toBe(0);
    expect(statistics['5+bonus'].count).toBe(0);
    expect(statistics[6].count).toBe(0);
  });
});
