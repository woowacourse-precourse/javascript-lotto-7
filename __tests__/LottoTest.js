import Lotto from '../src/lotto/Lotto.js';

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

  test.each([[[1, 2, 3, 4, 5, -4]], [[1, 2, 3, 4, 5, 0]], [[1, 2, 3, 4, 5, 46]]])(
    '로또 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다. %o',
    (numbers) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow('[ERROR]');
    },
  );

  test('getMatchedCountWithWinningNumbers', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getMatchedCountWithWinningNumbers(winningNumbers)).toBe(6);
  });

  test('isMatchedWithBonusNumber', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.isMatchedWithBonusNumber(7)).toBe(false);
    expect(lotto.isMatchedWithBonusNumber(3)).toBe(true);
  });

  test('toString', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');
  });
});
