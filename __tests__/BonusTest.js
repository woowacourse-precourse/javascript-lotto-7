import { validateBonus } from '../src/validate';
import { ERROR_MESSAGE } from '../src/constant';

describe('보너스 숫자 유효성 테스트', () => {
  test('유효한 보너스 번호 입력 시 예외가 발생하지 않음', () => {
    expect(() => validateBonus(7, [1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test('보너스 번호가 숫자가 아닌 경우 예외 발생', () => {
    expect(() => validateBonus('abc', [1, 2, 3, 4, 5, 6])).toThrow(
      ERROR_MESSAGE.NOT_NUM_ERROR
    );
  });

  test('보너스 번호가 1~45 범위를 벗어나는 경우 예외 발생', () => {
    expect(() => validateBonus(46, [1, 2, 3, 4, 5, 6])).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE_ERROR
    );
    expect(() => validateBonus(0, [1, 2, 3, 4, 5, 6])).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE_ERROR
    );
  });

  test('보너스 번호가 당첨 번호와 중복되는 경우 예외 발생', () => {
    expect(() => validateBonus(5, [1, 2, 3, 4, 5, 6])).toThrow(
      ERROR_MESSAGE.BONUS_NUM_NOT_UNIQUE_ERROR
    );
  });
});
