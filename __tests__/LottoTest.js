import Lotto from '../src/classes/Lotto.js';

describe('로또 클래스 테스트', () => {
  // 개수가 6개를 초과하는 경우
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // 개수가 6개 미만인 경우
  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  // 중복된 숫자가 포함된 경우
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 숫자 범위를 초과한 경우 (45 초과)
  test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  // 숫자 범위를 초과한 경우 (1 미만)
  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  // 빈 배열일 경우
  test('로또 번호 배열이 비어 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([]);
    }).toThrow('[ERROR]');
  });

  // 숫자가 아닌 값이 포함된 경우
  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 'a', 5, 6]);
    }).toThrow('[ERROR]');
  });
});
