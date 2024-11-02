import LottoMatcher from '../../src/controllers/LottoMatcher.js';
import Lotto from '../../src/controllers/Lotto.js';
import { RANK_KEYS } from '../../src/utils/constants.js';

describe('LottoMatcher 클래스 테스트', () => {
  test('checkMatchingNumbers가 일치하는 로또 번호 개수를 반환한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([1, 3, 5, 7, 9, 11]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const matchCounts = LottoMatcher.checkMatchingNumbers(
      lottoTickets,
      winningNumbers
    );

    expect(matchCounts).toEqual([6, 0, 3]);
  });

  test('checkBonusMatch가 보너스 번호 여부를 올바르게 반환한다.', () => {
    const lottoTicket = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 6;

    expect(LottoMatcher.checkBonusMatch(lottoTicket, bonusNumber)).toBe(true);
    expect(LottoMatcher.checkBonusMatch(lottoTicket, 7)).toBe(false);
  });

  test('assignLottoRank가 올바른 rankCounts를 반환한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 10, 11]),
      new Lotto([1, 2, 3, 9, 10, 11]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const rankCounts = LottoMatcher.assignLottoRank(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(rankCounts).toEqual({
      [RANK_KEYS.SIX_MATCH]: 1,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: 1,
      [RANK_KEYS.FIVE_MATCH]: 1,
      [RANK_KEYS.FOUR_MATCH]: 1,
      [RANK_KEYS.THREE_MATCH]: 1,
    });
  });
});
