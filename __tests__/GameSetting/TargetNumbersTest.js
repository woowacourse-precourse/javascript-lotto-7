import TargetNumbers from "../../src/GameSetting/TargetNumbers";

describe("TargetNumbers", () => {
  test.each([
    ["1,2,3,43,4,8", [1, 2, 3, 43, 4, 8]],
    ["1, 2, 4, 5, 6, 22", [1, 2, 4, 5, 6, 22]],
  ])("올바른 입력값을 전달할 때 배열을 반환한다", (input, expected) => {
    let targetNumbers = new TargetNumbers(input);
    expect(targetNumbers.getTargetNumbers()).toEqual(expected);
  });

  test.each([
    ["1,2,3,43"],
    ["1,1,3,43,4"],
    ["1,2,3,43,44,46"],
    ["a,1,2,3,43,4"],
  ])("잘못된 입력값 %p를 전달할 때 에러를 던진다", (input) => {
    expect(() => new TargetNumbers(input)).toThrow("[ERROR]");
  });
});
