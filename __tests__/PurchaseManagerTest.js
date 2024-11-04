import PurchaseManager from "../src/PurchaseManager";

describe("PurchaseManager 클래스 테스트", () => {
  test("구매가능한 최대 로또 개수를 구할 수 있다.", () => {
    const purchaseManager = new PurchaseManager(1000);

    expect(purchaseManager.calculateMaxLottos(7000)).toBe(7);
  });
});
