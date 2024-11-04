import Lotto from '../src/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
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

  describe('메서드 테스트', () => {
    test('getNumbers() 메서드는 로또 번호 배열을 반환한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);
      expect(lotto.getNumbers()).toEqual(numbers);
    });

    test('toString() 메서드는 로또 번호를 "[1, 2, 3, 4, 5, 6]" 형식의 문자열로 반환한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);
      expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');
    });

    test('getMatchedCount() 메서드는 당첨 번호와 일치하는 번호의 개수를 반환한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = [1, 2, 3, 7, 8, 9];
      expect(lotto.getMatchedCount(winningNumbers)).toBe(3);
    });

    test('isBonusMatched() 메서드는 보너스 번호가 로또 번호에 포함되어 있으면 true를 반환한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 6;
      expect(lotto.isBonusMatched(bonusNumber)).toBe(true);
    });

    test('isBonusMatched() 메서드는 보너스 번호가 로또 번호에 포함되어 있지 않으면 false를 반환한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;
      expect(lotto.isBonusMatched(bonusNumber)).toBe(false);
    });
  });
});
