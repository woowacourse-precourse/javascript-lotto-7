import { Calculator } from "../src/utils/Calculator.js";

describe("Calculator 클래스 테스트", () => {
  test.each([
    [{ 1: 3, 2: 0, 3: 0, 4: 0, 5: 0 }, 6000000000],
    [{ 1: 0, 2: 1, 3: 0, 4: 0, 5: 1 }, 30005000],
    [{ 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 }, 1500000],
    [{ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }, 2031555000],
  ])("당첨금 계산 테스트", (rankingTotal, prize) => {
    expect(Calculator.totalPrize(rankingTotal)).toBe(prize);
  });
});
