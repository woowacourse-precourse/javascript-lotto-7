import Lotto from '../src/models/Lotto.js';

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

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('입력값이 비었을 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([]);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 입력이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 'b', 'c', 'd', 'e', 'f']);
    }).toThrow('[ERROR]');
  });

  test('숫자 사이에 공백이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, ' ', 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 46, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
