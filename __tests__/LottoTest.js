import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('당첨 번호와 일치하는 번호 개수 및 보너스 번호 일치 여부 확인 기능 테스트', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const expected = {
      matchingCount: 5,
      hasBonus: true,
    };

    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const matchResult = lotto.match(winningNumbers, bonus);

    expect(matchResult).toEqual(expected);
  });

  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});
