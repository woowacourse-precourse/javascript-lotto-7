// PurchasedLotto.test.js
import PurchasedLotto from "../src/models/PurchasedLotto.js";
import { LOTTO_PRICE_UNIT } from "../src/constants/lottoConstants.js";

describe("PurchasedLotto", () => {
  test("유효한 값으로 PurchasedLotto 생성", () => {
    const purchaseAmount = 2000;
    const purchasedLotto = new PurchasedLotto(purchaseAmount);
    expect(purchasedLotto.numberOfTickets).toBe(2);
    expect(purchasedLotto.getPurchaseAmount()).toBe(purchaseAmount);
    expect(purchasedLotto.getTickets().length).toBe(2);
  });

  test("0원 PurchasedLotto 생성", () => {
    const purchaseAmount = 0;
    const purchasedLotto = new PurchasedLotto(purchaseAmount);
    expect(purchasedLotto.numberOfTickets).toBe(0);
    expect(purchasedLotto.getTickets().length).toBe(0);
  });
});
