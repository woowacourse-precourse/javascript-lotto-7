import calculateWinningSum from "../src/utils/calculateWinningSum.js";

const matchCountList = {
  3: { count: 1, winning: 5000 },
  4: { count: 0, winning: 50000 },
  5: {
    count: 0,
    winning: 30000000,
    isBonusMatchCount: 0,
    isBonusMatchWinning: 30000000,
  },
  6: { count: 0, winning: 2000000000 },
};

describe("calculateWinningSum 테스트", () => {
  test("당첨금의 합을 구한다.", () => {
    expect(calculateWinningSum(matchCountList)).toBe(5000);
  });
});
