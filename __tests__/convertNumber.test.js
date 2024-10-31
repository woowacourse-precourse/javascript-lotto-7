import { ERROR } from "../src/config/config";
import { convertNumber } from "../src/features/convertNumber";

describe("convertNumber 테스트", () => {
  test("정상적으로 값을 반환하는 지 확인", () => {
    const INPUT = "8000";
    const EXPECTED = 8000;
    expect(convertNumber(INPUT)).toBe(EXPECTED);
  });

  test("숫자로 변환하지 못할 때, 에러를 발생시키는 지 확인", () => {
    const INPUT = "NOT NUMBER";
    expect(() => convertNumber(INPUT)).toThrow(ERROR.NOT_NUMBER);
  });
});
