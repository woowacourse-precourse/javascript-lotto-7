import Lotto from '../src/models/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호의 개수가 6개가 안되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 범위를 벗어나는 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 60, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아닌 경우 : [문자] ', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'a', 5]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호가 숫자가 아닌 경우2 : [숫자+문자열] ', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, '3a', 5]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호가 숫자가 아닌 경우3 : [문자열]', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'abc', 5]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호가 숫자가 아닌 경우4 : [특수문자]', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, ';', 5]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호가 양수가 아닌 경우', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, -3, 5]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호에 빈칸이 있는 경우', () => {
    expect(() => {
      new Lotto([1, , 3, , -3, 5]);
    }).toThrow('[ERROR]');
  });
});
