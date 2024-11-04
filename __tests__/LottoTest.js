import Lotto from '../src/Lotto';
import { ERROR_MESSAGE } from '../src/constant';
import { validateNumbers } from '../src/validate';
describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUM_NOT_UNIQUE_ERROR);
  });

  test('입력 형식이 잘못된 경우 예외 발생', () => {
    expect(() => validateNumbers('1,2,3,4,5')).toThrow(
      ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR
    );
    expect(() => validateNumbers('1,2,3;4,5,6')).toThrow(
      ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR
    );
    expect(() => validateNumbers('1,2,3,4,5,6,7')).toThrow(
      ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR
    );
  });

  test('숫자가 1~45 범위를 벗어나는 경우 예외 발생', () => {
    expect(() => validateNumbers('1,2,3,4,5,46')).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE_ERROR
    );
    expect(() => validateNumbers('0,2,3,4,5,6')).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE_ERROR
    );
  });
  test('유효한 로또 번호가 주어지면 예외가 발생하지 않고 객체가 생성된다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
