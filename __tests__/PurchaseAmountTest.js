import App from "../src/App.js";
import ERRORS from "../src/constants/Errors.js";

describe("구매 금액 검증 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("1000원으로 나누어 떨어지지 않는 금액 입력시 에러가 발생한다", () => {
    // given
    const invalidAmounts = ["1500", "2200", "3100", "1"];

    // when & then
    invalidAmounts.forEach((amount) => {
      expect(() => {
        app.validatePurchaseAmount(amount);
      }).toThrow(ERRORS.NOT_1000_WON);
    });
  });

  test("0원 이하의 금액 입력시 에러가 발생한다", () => {
    // given
    const invalidAmounts = ["0", "-1000", "-5000"];

    // when & then
    invalidAmounts.forEach((amount) => {
      expect(() => {
        app.validatePurchaseAmount(amount);
      }).toThrow(ERRORS.NOT_ENOUGH_MONEY);
    });
  });

  test("1000원 단위의 올바른 금액 입력시 에러가 발생하지 않는다", () => {
    // given
    const validAmounts = ["1000", "2000", "5000", "10000"];

    // when & then
    validAmounts.forEach((amount) => {
      expect(() => {
        app.validatePurchaseAmount(amount);
      }).not.toThrow();
    });
  });

  test("숫자가 아닌 입력값이 들어올 경우 에러가 발생한다", () => {
    // given
    const invalidInputs = ["abc", "1000원", "!@#", ""];

    // when & then
    invalidInputs.forEach((input) => {
      expect(() => {
        app.validatePurchaseAmount(input);
      }).toThrow();
    });
  });
});
