import { LOTTO } from "../src/constants/Constants.js";
import { Validator } from "../src/utils/Validator.js";

describe("Validator 클래스 테스트", () => {
  test.each([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])(`총 ${LOTTO.TOTAL_NUMBERS}개가 아닌 경우`, (numbers) => {
    expect(() => Validator.totalNumber(numbers)).toThrow(Error);
  });

  test.each([
    [1, 1, 1, 1, 1, 46],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 100],
    [1, 1, 1, 1, 1, "ㄱ"],
  ])(`${LOTTO.ARRANGE_START}~${LOTTO.ARRANGE_END}가 아닌 경우`, (numbers) => {
    expect(() => Validator.numberArrange(numbers)).toThrow(Error);
  });

  test.each([
    [1, 1, 1, 1, 1, 1.5],
    [1, 1, 1, 1, 1, "ㄱ"],
  ])("정수가 아닌 경우", (numbers) => {
    expect(() => Validator.isInteger(numbers)).toThrow(Error);
  });

  test.each([
    [1, 1, 2, 3, 4, 5],
    [1, 1, 1, 1, 1, 1],
  ])("숫자가 중복된 경우", (numbers) => {
    expect(() => Validator.sameNumber(numbers)).toThrow(Error);
  });

  test.each([[1200, 500, "hello"]])(
    "구입 금액 유효성 검사 테스트",
    (numbers) => {
      expect(() => Validator.purchaseAmountuntest(numbers)).toThrow(Error);
    }
  );

  test.each([[0, -1000]])(`${LOTTO.PRICE} 미만인 경우`, (numbers) => {
    expect(() => Validator.minPurchase(numbers)).toThrow(Error);
  });
});
