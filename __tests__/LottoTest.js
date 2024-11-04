import Lotto from "../src/Lotto";

describe("Lotto 클래스 테스트", () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 7], 5],
    [[1, 2, 3, 4, 7, 8], 4],
    [[1, 2, 3, 7, 8, 9], 3],
    [[1, 2, 7, 8, 9, 10], 2],
    [[1, 7, 8, 9, 10, 11], 1],
    [[7, 8, 9, 10, 11, 12], 0],
  ])("당첨 번호 비교 테스트", (numbers, match) => {
    expect(lotto.matchingWinning(numbers)).toBe(match);
  });
});
