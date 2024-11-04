import ERROR_MESSAGES from '../src/constants/error.js';
import Lotto from '../src/Lotto.js';

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

  test('로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3.5, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.NOT_INTEGER);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호에 빈 값 또는 공백이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, '', 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.EMPTY);
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다..', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
  });
});
