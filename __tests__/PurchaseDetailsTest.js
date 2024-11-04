import PurchaseDetails from '../src/Models/PurchaseDetails.js';

describe('구매내역 클래스 테스트', () => {
  test('구입 금액이 공백이면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseDetails('  ');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseDetails('1299f');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 소수이면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseDetails('42.53');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1000보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseDetails('999');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1000단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseDetails('40001');
    }).toThrow('[ERROR]');
  });

  test('구입내역 반환 테스트', () => {
    const purchaseDetails = new PurchaseDetails('4000');
    expect(purchaseDetails.detail).toStrictEqual({
      purchaseAmount: 4000,
      purchaseCount: 4,
    });
  });
});
