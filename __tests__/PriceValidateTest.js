import { ERROR_MESSAGE } from "../src/constants/Constants";
import Validator from "../src/util/Validator";

describe("구입금액 입력 테스트", () => {
  const validate = new Validator();

  test("구입금액에 숫자가 아닌 문자가 포함될 경우 에러를 출력한다", () => {
    const INPUT_VALUE = "9,000";
    //then
    expect(() => validate.isPriceNumber(INPUT_VALUE)).toThrow(
      ERROR_MESSAGE.PRICE_NUMBER_ERROR
    );
  });

  test("구입금액에 음수가 입력된 경우 에러를 출력한다", () => {
    const INPUT_VALUE = "-8000";
    expect(() => validate.isPricePositive(INPUT_VALUE)).toThrow(
      ERROR_MESSAGE.PRICE_NEGATIVE_ERROR
    );
  });

  test("구입금액이 1000단위가 아닌 경우 에러를 출력한다", () => {
    const INPUT_VALUE = "9001";
    expect(() => validate.isPriceDivisible(INPUT_VALUE)).toThrow(
      ERROR_MESSAGE.PRICE_DIVISIBLE_ERROR
    );
  });
});
