import { getLottoCount } from "../src/features/getLottoCount.js";
import { convertNumber } from "../src/features/convertNumber.js";
import { ERROR } from "../src/config/config.js";

jest.mock("../src/features/convertNumber", () => ({
  convertNumber: jest.fn(),
}));

describe("getLottoCount 테스트", () => {
  test("정상적으로 숫자를 반환하는 지 확인", () => {
    const INPUT = "8000";
    const EXPECTED = 8;
    convertNumber.mockReturnValueOnce(8000);
    expect(getLottoCount(INPUT)).toBe(EXPECTED);
  });

  test("숫자가 1000으로 나누어 떨어지지 않는 경우 에러를 발생시키는 지 확인", () => {
    const INPUT = "7500";
    convertNumber.mockReturnValueOnce(7500);
    expect(() => getLottoCount(INPUT)).toThrowError(ERROR.INVALID_NUMBER);
  });

  test("입력값이 공백일 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "";
    expect(() => getLottoCount(INPUT)).toThrowError(ERROR.INPUT_EMPTY);
  });

  test("입력값이 음수일 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "-5000";
    convertNumber.mockReturnValueOnce(-5000);
    expect(() => getLottoCount(INPUT)).toThrowError(ERROR.INVALID_NUMBER);
  });

  test("입력값이 숫자가 아닐 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "NOT NUMBER";
    convertNumber.mockImplementation(() => {
      throw new Error(ERROR.NOT_NUMBER);
    });
    expect(() => getLottoCount(INPUT)).toThrowError(ERROR.NOT_NUMBER);
  });
});
