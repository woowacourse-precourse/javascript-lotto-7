import {
  validateCost,
  validateInteger,
  validateNumber,
  validateRange,
} from '../src/utils/Validation.js';
import { ERROR } from '../src/constants/Constants.js';

describe('사용자 입력값 예외 테스트', () => {
  test('사용자가 입력한 값이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateNumber('10a');
    }).toThrow(ERROR.COST_TYPE);
  });

  test('사용자가 입력한 로또 구매 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateCost(12345);
    }).toThrow(ERROR.COST_UNIT);
  });

  test('사용자가 입력한 값이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateInteger(12.35);
    }).toThrow(ERROR.COST_UNIT);
  });

  test('사용자가 입력한 값이 1-45 범위 밖의 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      validateRange(46);
    }).toThrow(ERROR.LOTTO_RANGE);
  });
});
