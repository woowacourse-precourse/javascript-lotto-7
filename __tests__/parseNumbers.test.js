import { parseNumbers } from "../src/features/parseNumbers.js";
import { ERROR } from "../src/config/config.js";

describe("parseNumbers 테스트", () => {
  test("정상적으로 값을 반환하는 지 확인", () => {
    const INPUT = "1,2,3,4,5,6";
    const EXPECTED = [1, 2, 3, 4, 5, 6];
    expect(parseNumbers(INPUT)).toEqual(EXPECTED);
  });

  test("입력값이 숫자가 아닐 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "A,S,A,P";
    expect(() => parseNumbers(INPUT)).toThrowError(ERROR.NOT_NUMBER);
  });

  test("구분자가 다를 때 에러를 발생시키는 지 확인", () => {
    const INPUT = "1.2.3.4";
    expect(() => parseNumbers(INPUT)).toThrowError(ERROR.NOT_NUMBER);
  });
});
