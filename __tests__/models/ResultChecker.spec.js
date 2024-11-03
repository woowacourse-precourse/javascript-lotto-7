import ResultChecker from '../../src/models/ResultChecker';
import { PRIZE_RANKS } from '../../src/constants/prizes';

describe('ResultChecker', () => {
  let resultChecker;

  beforeEach(() => {
    resultChecker = new ResultChecker();
  });

  describe('checkAllTickets()', () => {
    it('should return correct count of each rank', () => {
      // given
      const tickets = [
        [1, 2, 3, 4, 5, 6], // match6
        [1, 2, 3, 4, 5, 45], // match5PlusBonus
        [1, 2, 3, 4, 5, 44], // match5
        [1, 2, 3, 4, 43, 44], // match4
        [1, 2, 3, 42, 43, 44], // match3
        [7, 8, 9, 10, 11, 12], // no match
      ];
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 45;

      // when
      const result = resultChecker.checkAllTickets(
        tickets,
        winningNumbers,
        bonusNumber,
      );

      // then
      expect(result).toEqual({
        [PRIZE_RANKS.MATCH_6]: 1,
        [PRIZE_RANKS.MATCH_5_PLUS_BONUS]: 1,
        [PRIZE_RANKS.MATCH_5]: 1,
        [PRIZE_RANKS.MATCH_4]: 1,
        [PRIZE_RANKS.MATCH_3]: 1,
      });
    });
  });

  describe('checkRank()', () => {
    it.each([
      [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 45, PRIZE_RANKS.MATCH_6],
      [
        [1, 2, 3, 4, 5, 45],
        [1, 2, 3, 4, 5, 6],
        45,
        PRIZE_RANKS.MATCH_5_PLUS_BONUS,
      ],
      [[1, 2, 3, 4, 5, 44], [1, 2, 3, 4, 5, 6], 45, PRIZE_RANKS.MATCH_5],
      [[1, 2, 3, 4, 43, 44], [1, 2, 3, 4, 5, 6], 45, PRIZE_RANKS.MATCH_4],
      [[1, 2, 3, 42, 43, 44], [1, 2, 3, 4, 5, 6], 45, PRIZE_RANKS.MATCH_3],
      [[7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], 45, null],
    ])(
      'should return %s for ticket %p with winning numbers %p and bonus number %i',
      (ticket, winningNumbers, bonusNumber, expectedRank) => {
        const rank = resultChecker.checkRank(
          ticket,
          winningNumbers,
          bonusNumber,
        );
        expect(rank).toBe(expectedRank);
      },
    );
  });

  describe('countMatches', () => {
    it.each([
      [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 6],
      [[1, 2, 3, 4, 5, 45], [1, 2, 3, 4, 5, 6], 5],
      [[1, 2, 3, 4, 44, 45], [1, 2, 3, 4, 5, 6], 4],
      [[1, 2, 3, 43, 44, 45], [1, 2, 3, 4, 5, 6], 3],
      [[7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], 0],
    ])(
      'should return %i matches for ticket %p with winning numbers %p',
      (ticket, winningNumbers, expectedMatches) => {
        const matchCount = resultChecker.countMatches(ticket, winningNumbers);
        expect(matchCount).toBe(expectedMatches);
      },
    );
  });
});
