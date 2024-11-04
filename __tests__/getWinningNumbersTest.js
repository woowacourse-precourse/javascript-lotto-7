import { validateWinningNumbers } from "../src/validateWinningNumbers";

describe("getWinningNumbers 테스트", () => {
  test("당첨 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => validateWinningNumbers("1,2,3,4,5")).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복이 있으면 예외가 발생한다.", () => {
    expect(() => validateWinningNumbers("1,2,3,4,5,5")).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => validateWinningNumbers("0,2,3,4,5,46")).toThrow("[ERROR]");
  });

  test("올바른 당첨 번호를 반환한다.", () => {
    const numbers = validateWinningNumbers("1,2,3,4,5,6");
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
