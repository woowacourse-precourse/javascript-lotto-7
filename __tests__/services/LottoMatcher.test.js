import LottoMatcher from '../../src/services/LottoMatcher.js';
import Lotto from '../../src/domain/Lotto.js';
import { RANK_KEYS } from '../../src/utils/constants.js';

describe('LottoMatcher 클래스 테스트', () => {
  test('로또 티켓의 일치하는 로또 번호 개수를 반환한다.', () => {
    // given
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([1, 3, 5, 7, 9, 11]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoMatcher = new LottoMatcher(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    // when
    const rankCounts = lottoMatcher.run();

    // then
    expect(rankCounts[RANK_KEYS.SIX_MATCH]).toBe(1);
    expect(rankCounts[RANK_KEYS.THREE_MATCH]).toBe(1);
    expect(rankCounts[RANK_KEYS.NONE]).toBe(1);
  });

  test('보너스 번호가 일치하는지 올바르게 판단한다.', () => {
    // given
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;
    const lottoMatcher = new LottoMatcher(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    // when
    const rankCounts = lottoMatcher.run();

    // then
    expect(rankCounts[RANK_KEYS.SIX_MATCH]).toBe(1);
    expect(rankCounts[RANK_KEYS.NONE]).toBe(1);
  });

  test('티켓의 일치 개수와 보너스 번호를 기준으로 rankCounts를 반환한다.', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 10, 11]),
      new Lotto([1, 2, 3, 9, 10, 11]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoMatcher = new LottoMatcher(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    // when
    const rankCounts = lottoMatcher.run();

    expect(rankCounts).toEqual({
      [RANK_KEYS.SIX_MATCH]: 1,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: 1,
      [RANK_KEYS.FIVE_MATCH]: 1,
      [RANK_KEYS.FOUR_MATCH]: 1,
      [RANK_KEYS.THREE_MATCH]: 1,
      [RANK_KEYS.NONE]: 0,
    });
  });
});
