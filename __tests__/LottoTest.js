import Lotto from '../src/Lotto';

describe('로또 클래스 성공 테스트', () => {
  test('로또 번호가 올바르면 번호를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumber()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('로또 클래스 예외 테스트', () => {
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

  test.each([[''], [1, 2, 3, 4]])(
    '로또 번호의 개수가 6개가 되지 않으면 예외가 발생한다. (%s)',
    (lotto) => {
      expect(() => new Lotto(lotto)).toThrow('[ERROR]');
    }
  );

  test.each([
    [1, 2, 3, 4, 5, 100],
    [0, 2, 5, 8, 23, 44],
  ])(
    '로또 번호에 1 ~ 45 사이 범위를 벗어난 숫자가 있으면 예외가 발생한다. (%s)',
    (lotto) => {
      expect(() => new Lotto(lotto)).toThrow('[ERROR]');
    }
  );

  test.each([
    ['a', 2, 3, 4, 5, 6],
    [1, 2, '@', 3, 4, 5],
  ])(
    '로또 번호에 잘 못 입력된 문자가 있으면 예외가 발생한다. (%s)',
    (lotto) => {
      expect(() => new Lotto(lotto)).toThrow('[ERROR]');
    }
  );
});
