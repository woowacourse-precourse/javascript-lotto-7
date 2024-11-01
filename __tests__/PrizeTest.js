import { Prize } from '../src/models/index.js';

describe('로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('rank 메소드 기능 테스트', () => {
    test('6개의 일치를 갖는 경우를 계산한다.', () => {
      // given
      const matchData = {
        matchCount: 6,
        isBonusMatch: false,
      };

      // when
      const ranking = Prize.rank(matchData);

      // then
      expect(ranking).toBe(1);
    });

    test('5개의 일치와 보너스 일치를 갖는 경우를 계산한다.', () => {
      // given
      const matchData = {
        matchCount: 5,
        isBonusMatch: true,
      };

      // when
      const ranking = Prize.rank(matchData);

      // then
      expect(ranking).toBe(2);
    });
  });
});
