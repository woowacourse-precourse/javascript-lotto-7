import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("당첨 번호 비교 테스트", () => {
    const WINNING = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10],
      [1, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
    ];
    const RESULT = [6, 5, 4, 3, 2, 1, 0];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    for (let i = 0; i < WINNING.length; i++) {
      expect(lotto.matchingWinning(WINNING[i])).toBe(RESULT[i]);
    }
  });
});
