import Lotto from '../src/Lotto';
import ERROR from '../src/constants/error';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.INVALID_NUMBER_COUNT);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.DUPLICATED_NUMBER);
  });

  test('로또의 번호가 6개 이하이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3]);
    }).toThrow(ERROR.INVALID_NUMBER_COUNT);
  });

  test('로또 번호를 입력하지 않을 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['']);
    }).toThrow(ERROR.BLANK);
  });

  test('범위를 벗어난 로또 번호를 입력할 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 47]);
    }).toThrow(ERROR.INVALID_RANGE_NUMBER);
  });

  test('숫자가 아닌 값을 입력했을 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 'b', 3, 4, 5, 6]);
    }).toThrow(ERROR.INVALID_VALUE);
  });

  test('정수가 아닌 값을 입력했을 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5.5, 6]);
    }).toThrow(ERROR.IS_NOT_INT);
  });
});
