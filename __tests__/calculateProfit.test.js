import { calculateProfit } from "../src/features/calculateProfit.js";
import { ERROR, PERCENT } from "../src/config/config.js";

describe("calculateProfit 테스트", () => {
  test("정상적으로 값을 반환하는 지 확인", () => {
    const AMOUNT = 200;
    const TOTAL = 450;
    const EXPECTED = `225.0${PERCENT}`;
    expect(calculateProfit(AMOUNT, TOTAL)).toBe(EXPECTED);
  });

  test("구매 금액이 숫자가 아닐 경우 에러를 발생시키는 지 확인", () => {
    const AMOUNT = "not a number";
    const TOTAL = 450;
    expect(() => calculateProfit(AMOUNT, TOTAL)).toThrow(ERROR.NOT_NUMBER);
  });

  test("당첨 금액이 숫자가 아닐 경우 에러를 발생시키는 지 확인", () => {
    const AMOUNT = 200;
    const TOTAL = "not a number";
    expect(() => calculateProfit(AMOUNT, TOTAL)).toThrow(ERROR.NOT_NUMBER);
  });
});
