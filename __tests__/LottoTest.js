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

  test('로또 번호에 숫자가 아닌 값이 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 빈 값이 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, undefined, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1~45 범위 밖의 숫자가 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});
