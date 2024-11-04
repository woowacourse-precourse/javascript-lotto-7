import { ERROR } from '../src/constants/Constants.js';
import ValidateCost from '../src/validator/ValidateCost.js';

describe('로또 구매 가격 입력값 예외 테스트', () => {
  test('사용자가 입력한 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      ValidateCost.checkNumber('10a');
    }).toThrow(ERROR.NON_NUMBER);
  });

  test('사용자가 입력한 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      ValidateCost.checkCost(12345);
    }).toThrow(ERROR.COST_UNIT);
  });

  test('사용자가 입력한 금액이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      ValidateCost.checkInteger(1200.35);
    }).toThrow(ERROR.NON_INTEGER);
  });
});
