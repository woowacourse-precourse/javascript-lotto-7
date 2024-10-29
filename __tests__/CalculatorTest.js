import { Calculator } from "../src/utils/Calculator";

describe("계산기 클래스 테스트", () => {
  test("당첨금 계산 테스트", () => {
    const RANKING = [
      [1, 1, 1],
      [2, 5],
      [3, false],
      [1, 2, 3, 4, 5, false],
    ];
    const RESULT = [6000000000, 30005000, 1500000, 2031555000];

    for (let i = 0; i < RANKING.length; i++) {
      expect(Calculator.prizeAmount(RANKING[i])).toBe(RESULT[i]);
    }
  });
});
