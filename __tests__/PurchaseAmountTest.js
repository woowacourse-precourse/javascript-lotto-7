import PurchaseAmount from '../src/PurchaseAmount.js';

describe('PurchaseAmount 클래스 테스트', () => {
  test('올바른 금액을 입력하면 로또 구매 개수를 계산한다', () => {
    const amount = new PurchaseAmount(2000);
    expect(amount.getAmount()).toBe(2);
  });

  test('숫자가 아닌 입력의 경우 예외가 발생한다', () => {
    expect(() => {
      new PurchaseAmount('abc');
    }).toThrow('[ERROR] 구매 금액은 숫자여야 합니다.');
  });

  test('1000원 미만 금액 입력 시 예외가 발생한다', () => {
    expect(() => {
      new PurchaseAmount(900);
    }).toThrow('[ERROR] 구매 금액은 1000원 이상이어야 합니다.');
  });

  test('1000원 단위가 아닌 금액 입력 시 예외가 발생한다', () => {
    expect(() => {
      new PurchaseAmount(1500);
    }).toThrow('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
  });

  test('정상적인 여러 금액에 대해 올바른 로또 수량을 반환한다', () => {
    const testCases = [
      { input: 1000, expected: 1 },
      { input: 5000, expected: 5 },
      { input: 10000, expected: 10 },
    ];

    testCases.forEach(({ input, expected }) => {
      const amount = new PurchaseAmount(input);
      expect(amount.getAmount()).toBe(expected);
    });
  });
});