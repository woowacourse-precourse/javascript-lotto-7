import { ERROR } from '../src/constants/Constants.js';
import ValidateBonus from '../src/validator/ValidateBonus.js';

describe('보너스 숫자 예외 테스트', () => {
  test('사용자가 입력한 보너스 숫자가 숫자 타입이 아니면 예외가 발생한다.', () => {
    expect(() => {
      ValidateBonus.checkNumber('10a');
    }).toThrow(ERROR.NON_NUMBER);
  });

  test('사용자가 입력한 보너스 숫자가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      ValidateBonus.checkInteger(12.3);
    }).toThrow(ERROR.NON_INTEGER);
  });

  test('사용자가 입력한 보너스 숫자가 1-45 범위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      ValidateBonus.checkRange(46);
    }).toThrow(ERROR.BONUS_RANGE);
  });
});
