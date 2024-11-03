import PurchaseLotto from '../src/PurchaseLotto.js';

describe('로또 구입 금액 테스트 - 정상 작동', () => {
  test('올바른 금액이 입력되었을 때 에러가 발생하지 않습니다.', () => {
    expect(() => new PurchaseLotto(5000)).not.toThrow();
  });

  test('안전한 정수 범위 내에서 1000원으로 나눠지는 최대 값이 입력되었을 때 에러가 발생하지 않습니다.', () => {
    expect(() => new PurchaseLotto(10000)).not.toThrow();
  });
});

describe('구입 금액에 맞는 로또 발행 테스트', () => {
  test('로또 구입 금액이 5,000원일 때 5개의 로또가 발행됩니다.', () => {
    const purchaseLotto = new PurchaseLotto(5000);
    expect(purchaseLotto.getQuantity()).toBe(5);
  });

  test('로또 구입 금액이 10,000원일 때 10개의 로또가 발행됩니다.', () => {
    const purchaseLotto = new PurchaseLotto(10000);
    expect(purchaseLotto.getQuantity()).toBe(10);
  });

  test('로또 구입 금액이 9,007,199,254,740,000원일 때 9007199254740개의 로또가 발행됩니다.', () => {
    const purchaseLotto = new PurchaseLotto(9007199254740000);
    expect(purchaseLotto.getQuantity()).toBe(9007199254740);
  });
});
