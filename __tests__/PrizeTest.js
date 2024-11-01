import { Prize } from '../src/models/index.js';

describe('로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('rank 메소드 기능 테스트', () => {
    test.each([
      [{ matchCount: 6, isBonusMatch: false }, 1, '6개 일치 (1등)'],
      [{ matchCount: 5, isBonusMatch: true }, 2, '5개 일치, 보너스 볼 일치 (2등)'],
      [{ matchCount: 5, isBonusMatch: false }, 3, '5개 일치 (3등)'],
      [{ matchCount: 4, isBonusMatch: false }, 4, '4개 일치 (4등)'],
      [{ matchCount: 3, isBonusMatch: false }, 5, '3개 일치 (5등)'],
    ])('matchData: %o인 경우 %d을 반환한다', (matchData, expected) => {
      expect(Prize.rank(matchData)).toBe(expected);
    });

    test('2개 이하 일치하면 0을 반환한다', () => {
      expect(Prize.rank({ matchCount: 2, isBonusMatch: false })).toBe(0);
      expect(Prize.rank({ matchCount: 1, isBonusMatch: false })).toBe(0);
      expect(Prize.rank({ matchCount: 0, isBonusMatch: false })).toBe(0);
    });

    test('7이상의 일치가 있으면 예외가 발생한다.', () => {
      expect(() => Prize.rank({ matchCount: 7, isBonusMatch: false })).toThrow('[ERROR]');
    });

    test('일치가 음수이면 예외가 발생한다.', () => {
      expect(() => Prize.rank({ matchCount: -1, isBonusMatch: false })).toThrow('[ERROR]');
    });
  });
});
