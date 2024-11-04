import Lotto from '../src/Lotto';
import { ERROR } from '../src/constants/Constants.js';

describe('로또 번호 클래스 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.LOTTO_ARRAY_COUNT);
  });

  test('로또 번호에 정수가 아닌 값이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 2.5, 3, 4, 5]);
    }).toThrow(ERROR.NON_INTEGER);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.LOTTO_REPEAT);
  });

  test('로또 번호가 1~45의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 45, 46, 99]);
    }).toThrow(ERROR.LOTTO_RANGE);
  });

  test('로또 번호에 숫자가 아닌 값이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, '@', 3, 4, 5]);
    }).toThrow(ERROR.LOTTO_TYPE);
  });
});
