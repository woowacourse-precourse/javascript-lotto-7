import LottoStatistics from '../src/domain/LottoStatistics.js';
import { MATCH_CODE } from '../src/constants/constants.js';

describe('로또 당첨 내역 클래스 테스트', () => {
  test('발행한 로또와 당첨 번호, 보너스 번호를 이용해 로또 당첨 내역을 계산하여 반환한다.', () => {
    // given
    const lottos = [[1, 2, 3, 5, 6, 7]];
    const winningNumbers = [2, 4, 3, 1, 6, 8];
    const bonusNumber = 7;

    const expectedMatchResults = new Map([
      [MATCH_CODE.THREE, 0],
      [MATCH_CODE.FOUR, 1],
      [MATCH_CODE.FIVE, 0],
      [MATCH_CODE.FIVE_WITH_BONUS, 0],
      [MATCH_CODE.SIX, 0],
    ]);

    // when
    const lottoStatistics = new LottoStatistics(lottos, winningNumbers, bonusNumber);
    const result = lottoStatistics.getMatchResults();

    // then
    expect(result).toEqual(expectedMatchResults);
  });
});
