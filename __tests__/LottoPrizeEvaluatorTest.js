import LottoPrizeEvaluator from "../src/functions/LottoPrizeEvaluator.js";

function testLottoResult({ numbers, win, bonus, expected }) {
  const result = LottoPrizeEvaluator.checkResult(numbers, { win, bonus });
  expect(result).toBe(expected);
}

describe("LottoPrizeEvaluator", () => {
  describe("로또 당첨 결과 생성 메서드 테스트", () => {
    test.each([
      { numbers: [1, 2, 3, 4, 5, 6], win: [7, 8, 9, 10, 11, 12], bonus: 13, expected: "None" },
      { numbers: [1, 2, 3, 4, 5, 6], win: [1, 2, 3, 7, 8, 9], bonus: 13, expected: "3개 일치 (5,000원)" },
      { numbers: [1, 2, 3, 4, 5, 6], win: [1, 2, 3, 4, 7, 8], bonus: 13, expected: "4개 일치 (50,000원)" },
      { numbers: [1, 2, 3, 4, 5, 6], win: [1, 2, 3, 4, 5, 7], bonus: 13, expected: "5개 일치 (1,500,000원)" },
      {
        numbers: [1, 2, 3, 4, 5, 7],
        win: [1, 2, 3, 4, 5, 6],
        bonus: 7,
        expected: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      },
      { numbers: [1, 2, 3, 4, 5, 6], win: [1, 2, 3, 4, 5, 6], bonus: 7, expected: "6개 일치 (2,000,000,000원)" },
    ])("주어진 번호로 결과를 검증합니다: $expected", testLottoResult);
  });
});
