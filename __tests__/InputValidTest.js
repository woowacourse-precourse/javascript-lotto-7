import purchaseLotto from "../src/purchaseLotto.js";
import { Errors } from "../src/constants.js";

describe("입력값 유효성 테스트", () => {
  test("구매 금액은 1000원 단위로 나누어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      purchaseLotto(1002);
    }).toThrow(Errors.cost.NOT_CORRECT_UNIT);
  });

  test("구매 금액이 유효하다.", () => {
    expect(() => {
      purchaseLotto(1000);
    }).not.toThrow();
  });
});
