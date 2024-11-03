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
    '로또 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다. %s',
    (numbers) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow('[ERROR]');
    },
  );

  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 7], 5],
    [[1, 2, 3, 4, 8, 9], 4],
    [[1, 2, 3, 10, 11, 12], 3],
    [[1, 2, 9, 10, 11, 12], 2],
    [[1, 38, 9, 10, 11, 12], 1],
    [[29, 38, 9, 10, 11, 12], 0],
  ])('getMatchedCountWithWinningNumbers - 로또 번호: %s', (numbers, expected) => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getMatchedCountWithWinningNumbers(numbers)).toBe(expected);
  });

  test.each([
    [1, true],
    [2, true],
    [7, false],
  ])('isMatchedWithBonusNumber - 보너스 번호: %d', (bonusNumber, expected) => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.isMatchedWithBonusNumber(bonusNumber)).toBe(expected);
  });

  test('toString', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');
  });
});
