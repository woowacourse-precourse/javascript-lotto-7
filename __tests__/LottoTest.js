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

  test('로또 번호가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 정수가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow('[ERROR]');
  });

  test('유효한 로또 번호로 생성하면 정상적으로 동작한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    expect(lotto.getNumbers()).toEqual(numbers);
  });

  test('로또 번호는 오름차순으로 정렬된다.', () => {
    const lotto = new Lotto([6, 3, 1, 4, 5, 2]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 번호는 불변성을 유지한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbers = lotto.getNumbers();
    numbers.push(7);

    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
