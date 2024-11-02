import { validateCost } from '../src/utils/Validation.js';
import { ERROR } from '../src/constants/Constants.js';

describe('로또 구매 금액 함수 예외 테스트', () => {
  test('사용자가 입력한 로또 구매 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateCost('10a');
    }).toThrow(ERROR.COST_TYPE);
  });

  test('사용자가 입력한 로또 구매 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateCost(12345);
    }).toThrow(ERROR.COST_UNIT);
  });

  test('사용자가 입력한 로또 구매 금액이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateCost(12.35);
    }).toThrow(ERROR.COST_UNIT);
  });
});
