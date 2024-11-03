import ValidatePurchaseAmount from '../src/models/ValidatePurchaseAmount.js';

describe('구입 금액 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new ValidatePurchaseAmount();
  });

  test('1000원 단위가 아닌 금액이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      validator.validatePurchaseAmount('1500');
    }).toThrow('[ERROR] 1000원 단위로 입력해주셔야 됩니다.');
  });

  test('숫자가 아닌 입력이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      validator.validatePurchaseAmount('1000a');
    }).toThrow('[ERROR] 숫자만 입력이 가능합니다.');
  });

  test('오버플로우를 발생하는 금액이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      validator.validatePurchaseAmount(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow('[ERROR]');
  });

  test('정상적인 구매 금액은 검증을 통과한다.', () => {
    expect(() => {
      validator.validatePurchaseAmount('1000');
    }).not.toThrow();

    expect(() => {
      validator.validatePurchaseAmount('2000');
    }).not.toThrow();
  });
});
