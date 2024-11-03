import Validators from '../src/utils/Validation.js';
import { ERROR } from '../src/constants/Constants.js';

describe('사용자 입력값 예외 테스트', () => {
  test('사용자가 입력한 값이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validators.checkNumber('10a');
    }).toThrow(ERROR.NON_NUMBER);
  });

  test('사용자가 입력한 로또 구매 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validators.checkCost(12345);
    }).toThrow(ERROR.COST_UNIT);
  });

  test('사용자가 입력한 값이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validators.checkInteger(12.35);
    }).toThrow(ERROR.NON_INTEGER);
  });

  test('사용자가 입력한 값이 1-45 범위 밖의 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      Validators.checkRange(46);
    }).toThrow(ERROR.LOTTO_RANGE);
  });
});
