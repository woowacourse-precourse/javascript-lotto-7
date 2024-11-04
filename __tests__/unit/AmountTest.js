import PurchaseAmount from '../../src/model/PurchaseAmount';

describe('구매 금액 테스트', () => {
  test('구매 금액이 입력되었는지 확인한다.', () => {
    expect(() => new PurchaseAmount()).toThrow("[ERROR] 구입금액을 입력해야 합니다.");
  });

  test('구매 금액은 양의 정수인지 확인한다.', () => {
    expect(() => new PurchaseAmount(-1000)).toThrow("[ERROR] 구입 금액은 양의 정수로 입력해야 합니다.");
    expect(() => new PurchaseAmount(0)).toThrow("[ERROR] 구입 금액은 양의 정수로 입력해야 합니다.");
    expect(() => new PurchaseAmount('abc')).toThrow("[ERROR] 구입 금액은 양의 정수로 입력해야 합니다.");
    expect(() => new PurchaseAmount('')).toThrow("[ERROR] 구입 금액은 양의 정수로 입력해야 합니다.");
  });

  test('구매 금액이 1000 단위인지 확인한다.', () => {
    expect(() => new PurchaseAmount(1500)).toThrow("[ERROR] 구입 금액은 1000 단위의 숫자로 입력해야 합니다.");
    expect(() => new PurchaseAmount(999)).toThrow("[ERROR] 구입 금액은 1000 단위의 숫자로 입력해야 합니다.");
  });

  test('올바른 형식의 구매 금액인지 확인한다.', () => {
    expect(() => new PurchaseAmount(1000)).not.toThrow();
    expect(() => new PurchaseAmount(2000)).not.toThrow();
    expect(() => new PurchaseAmount(5000)).not.toThrow();
  });
});