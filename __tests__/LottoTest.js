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

  test('로또 번호에 0이 포함되어 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([46, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 값이 포함되어 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 소수가 포함되어 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
