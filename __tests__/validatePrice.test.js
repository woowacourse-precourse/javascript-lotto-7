import { validatePrice } from "../src/Validation/validatePrice.js";
import { ERROR_MESSAGES } from "../src/Error/Error.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("Price validation", () => {
  beforeEach(() => {
    MissionUtils.Console.print = jest.fn();
  });

  test("유효한 가격 입력(1000)일 때 입력값 반환", () => {
    const result = validatePrice(1000);
    expect(result).toBe(1000);
    expect(MissionUtils.Console.print).not.toHaveBeenCalled();
  });

  test("입력이 비어있을 때 오류 메시지 출력 및 false 반환", () => {
    const result = validatePrice("");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      `[ERROR] ${ERROR_MESSAGES.price.NOT_ENTERED}`
    );
    expect(result).toBe(false);
  });

  test("숫자가 아닌 값 입력 시 오류 메시지 출력 및 false 반환", () => {
    const result = validatePrice("abc");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      `[ERROR] ${ERROR_MESSAGES.price.MUST_BE_NUMERIC}`
    );
    expect(result).toBe(false);
  });

  test("음수 입력 시 오류 메시지 출력 및 false 반환", () => {
    const result = validatePrice(-1000);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      `[ERROR] ${ERROR_MESSAGES.price.ONLY_POSITIVE_ALLOWED}`
    );
    expect(result).toBe(false);
  });

  test("0을 입력했을 때 오류 메시지 출력 및 false 반환", () => {
    const result = validatePrice(0);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      `[ERROR] ${ERROR_MESSAGES.price.ZERO_MONEY_NOT_ALLOWED}`
    );
    expect(result).toBe(false);
  });

  test("1000원 단위로 나누어 떨어지지 않는 입력(1500) 시 오류 메시지 출력 및 false 반환", () => {
    const result = validatePrice(1500);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      `[ERROR] ${ERROR_MESSAGES.price.MUST_BE_DIVISIBLE_BY_1000}`
    );
    expect(result).toBe(false);
  });

  test("유효한 큰 가격 입력(10000)일 때 입력값 반환", () => {
    const result = validatePrice(10000);
    expect(result).toBe(10000);
    expect(MissionUtils.Console.print).not.toHaveBeenCalled();
  });
});
