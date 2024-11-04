import RANKS from '../src/Model/Rank.js';
import RankCalculationService from '../src/Services/RankCalculationService.js';

describe('RankCalculationService', () => {
  let rankService;

  beforeEach(() => {
    rankService = new RankCalculationService(RANKS);
  });

  test('pickRank - matchingCount와 hasBonus 값에 따라 올바른 랭크 키를 반환한다', () => {
    expect(rankService.pickRank(6, false)).toBe(RANKS.SIX_MATCH.key);
    expect(rankService.pickRank(5, true)).toBe(RANKS.FIVE_MATCH_WITH_BONUS.key);
    expect(rankService.pickRank(5, false)).toBe(RANKS.FIVE_MATCH.key);
    expect(rankService.pickRank(4, false)).toBe(RANKS.FOUR_MATCH.key);
    expect(rankService.pickRank(3, false)).toBe(RANKS.THREE_MATCH.key);
    expect(rankService.pickRank(2, false)).toBe(RANKS.NO_MATCH.key);
  });

  test('updateRankCount - 티켓 카운트를 올바르게 증가시킨다', () => {
    rankService.updateRankCount(6, false);
    expect(rankService.rankCounts[RANKS.SIX_MATCH.key].ticket).toBe(1);
  });

  test('getRankCounts - 초기 랭크 카운트를 반환한다', () => {
    const rankCounts = rankService.getRankCounts();
    expect(rankCounts[RANKS.SIX_MATCH.key].ticket).toBe(0);
    expect(rankCounts[RANKS.FIVE_MATCH.key].ticket).toBe(0);
    expect(rankCounts[RANKS.FOUR_MATCH.key].ticket).toBe(0);
    expect(rankCounts[RANKS.THREE_MATCH.key].ticket).toBe(0);
    expect(rankCounts[RANKS.NO_MATCH.key].ticket).toBe(0);
  });

  test('calculateLotteries - 다양한 매칭 조합에 따라 랭크 카운트를 올바르게 업데이트한다', () => {
    const purchasedLotteries = [
      { getNumbers: () => [1, 2, 3, 4, 5, 6] }, // 6개 일치 - SIX_MATCH
      { getNumbers: () => [1, 2, 3, 4, 5, 7] }, // 5개 일치 + 보너스 - FIVE_MATCH_WITH_BONUS
      { getNumbers: () => [1, 2, 3, 4, 5, 8] }, // 5개 일치 - FIVE_MATCH
      { getNumbers: () => [1, 2, 3, 4, 10, 11] }, // 4개 일치 - FOUR_MATCH
      { getNumbers: () => [1, 2, 3, 12, 13, 14] }, // 3개 일치 - THREE_MATCH
      { getNumbers: () => [20, 21, 22, 23, 24, 25] }, // 0개 일치 - NO_MATCH
    ];

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    rankService.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );

    expect(rankService.rankCounts[RANKS.SIX_MATCH.key].ticket).toBe(1);
    expect(rankService.rankCounts[RANKS.FIVE_MATCH_WITH_BONUS.key].ticket).toBe(
      1,
    );
    expect(rankService.rankCounts[RANKS.FIVE_MATCH.key].ticket).toBe(1);
    expect(rankService.rankCounts[RANKS.FOUR_MATCH.key].ticket).toBe(1);
    expect(rankService.rankCounts[RANKS.THREE_MATCH.key].ticket).toBe(1);
    expect(rankService.rankCounts[RANKS.NO_MATCH.key].ticket).toBe(1);
  });

  test('calculateLotteries - 보너스 번호가 없는 경우에도 올바르게 랭크를 업데이트한다', () => {
    const purchasedLotteries = [
      { getNumbers: () => [1, 2, 3, 4, 5, 6] }, // 6개 일치 - SIX_MATCH
      { getNumbers: () => [1, 2, 3, 4, 5, 9] }, // 5개 일치, 보너스 없음 - FIVE_MATCH
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    rankService.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );

    expect(rankService.rankCounts[RANKS.SIX_MATCH.key].ticket).toBe(1);
    expect(rankService.rankCounts[RANKS.FIVE_MATCH_WITH_BONUS.key].ticket).toBe(
      0,
    );
    expect(rankService.rankCounts[RANKS.FIVE_MATCH.key].ticket).toBe(1);
  });

  test('calculateLotteries - 매칭 숫자가 없는 경우 NO_MATCH 카운트만 증가한다', () => {
    const purchasedLotteries = [
      { getNumbers: () => [10, 11, 12, 13, 14, 15] },
      { getNumbers: () => [20, 21, 22, 23, 24, 25] },
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    rankService.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );

    expect(rankService.rankCounts[RANKS.SIX_MATCH.key].ticket).toBe(0);
    expect(rankService.rankCounts[RANKS.NO_MATCH.key].ticket).toBe(2);
  });

  test('calculateLotteries - 보너스 번호만 일치하는 경우 NO_MATCH로 처리된다', () => {
    const purchasedLotteries = [
      { getNumbers: () => [7, 8, 9, 10, 11, 12] }, // 보너스 번호만 일치
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    rankService.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );

    expect(rankService.rankCounts[RANKS.NO_MATCH.key].ticket).toBe(1);
  });
});
