import App from "../src/App";
import { validatePurchaseAmount } from "../src/validate";

describe("getPurchaseAmount 테스트", () => {
  test("0 이하의 금액일 때 예외가 발생한다.", () => {
    expect(() => validatePurchaseAmount(0)).toThrow("[ERROR]");
  });

  test("1000원 단위가 아닐 때 예외가 발생한다.", () => {
    expect(() => validatePurchaseAmount(800)).toThrow("[ERROR]");
  });
  test("금액을 제대로 반환한다.", async () => {
    const app = new App();
    const amount = await app.getPurchaseAmount();
    expect(amount).toBe("8000");
  });
});
