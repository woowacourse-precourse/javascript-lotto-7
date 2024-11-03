import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('matchNumbers 메소드 기능 테스트', () => {
    test('당첨 번호와 비교하여 일치하는 번호 개수와 보너스 번호 일치 여부를 계산한다', () => {
      // given
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = {
        mainNumbers: [1, 2, 3, 7, 8, 9],
        bonusNumber: 6,
      };

      // when
      lotto.matchNumbers(winningNumbers);

      // then
      expect(lotto.getMatchCount()).toBe(3);
      expect(lotto.isBonusMatch()).toBe(true);
    });

    test('당첨 번호와 모두 일치하는 경우를 계산한다', () => {
      // given
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = {
        mainNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
      };

      // when
      lotto.matchNumbers(winningNumbers);

      // then
      expect(lotto.getMatchCount()).toBe(6);
      expect(lotto.isBonusMatch()).toBe(false);
    });
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});
