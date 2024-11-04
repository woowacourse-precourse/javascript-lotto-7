import {
  validateAmount,
  validateNumbers,
  validateBonus,
} from '../src/validate';
import { ERROR_MESSAGE } from '../src/constant';

describe('유효성 검사 함수 테스트', () => {
  describe('로또 구입 금액 테스트', () => {
    test('유효한 구입 금액을 입력한 경우', () => {
      expect(() => validateAmount(3000)).not.toThrow();
    });

    test('구입 금액이 숫자가 아닌 경우 예외 발생', () => {
      expect(() => validateAmount('asdf')).toThrow(ERROR_MESSAGE.NOT_NUM_ERROR);
    });

    test('구입 금액이 1000원 단위가 아닌 경우 예외 발생', () => {
      expect(() => validateAmount(1700)).toThrow(
        ERROR_MESSAGE.LOTTO_AMOUNT_UNIT_ERROR
      );
    });
  });

  describe('로또 당첨 번호 테스트', () => {
    test('유효한 로또 번호 입력 시 예외가 발생하지 않음', () => {
      expect(() => validateNumbers('1,2,3,4,5,6')).not.toThrow();
    });

    test('입력 형식이 잘못된 경우 예외 발생', () => {
      expect(() => validateNumbers('1,2,3,4,5')).toThrow(
        ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR
      );
      expect(() => validateNumbers('1,2,3;4,5,6')).toThrow(
        ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR
      );
    });

    test('숫자가 6개가 아닌 경우 예외 발생', () => {
      expect(() => validateNumbers('1,2,3,4,5')).toThrow(
        ERROR_MESSAGE.LOTTO_CNT_ERROR
      );
      expect(() => validateNumbers('1,2,3,4,5,6,7')).toThrow(
        ERROR_MESSAGE.LOTTO_CNT_ERROR
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
  });

  describe('보너스 숫자 테스트', () => {
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
});
