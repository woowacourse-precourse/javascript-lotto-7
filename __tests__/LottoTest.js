import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 숫자가 45를 초과하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 숫자가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호를 받아올 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 번호에 숫자가 있는지 확인할 수 있다.', () => {
    const lotto =  new Lotto([1, 2, 3, 4, 5, 6]);
    const include = lotto.has(5);
    expect(include).toBe(true);
  });

  test('로또 번호에 숫자가 있는지 확인할 수 있다.', () => {
    const lotto =  new Lotto([1, 2, 3, 4, 5, 6]);
    const notInclude = lotto.has(7);
    expect(notInclude).toBe(false);
  });
});
