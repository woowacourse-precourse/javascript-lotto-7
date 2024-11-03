import Lotto from '../src/Lotto';

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

  test('로또 번호에 숫자가 아닌 값이 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '숫자']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test.each([
    [[1, 3, 5, 7, 9, 11], 3],
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 7, 8, 9, 10, 11], 1],
    [[7, 8, 11, 14, 18, 21], 0],
  ])(
    '당첨 번호와 일치하는 번호의 수를 계산하는 기능 테스트',
    (numbers, expected) => {
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);
      const matchingCount = lotto.countMatchingNumbers(WINNING_NUMBERS);

      expect(matchingCount).toBe(expected);
    },
  );

  test.each([
    [[1, 3, 5, 7, 9, 11], true],
    [[1, 2, 3, 4, 5, 6], true],
    [[1, 7, 8, 9, 10, 11], true],
    [[7, 8, 11, 14, 18, 21], false],
  ])('보너스 번호와 일치하는지 파악하는 기능 테스트', (numbers, expected) => {
    const BONUS_NUMBER = 1;
    const lotto = new Lotto(numbers);
    const isBonusNumberMatched = lotto.isBonusNumberMatched(BONUS_NUMBER);

    expect(isBonusNumberMatched).toBe(expected);
  });
});
