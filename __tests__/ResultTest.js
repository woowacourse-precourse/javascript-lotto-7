import {
  generateResultStatistics,
  calculateTotalPrize,
} from "../src/utils/result.js";
import Lotto from "../src/models/Lotto.js";

describe("Result Statistics", () => {
  test("당첨 통계를 올바르게 생성", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([8, 9, 10, 11, 12, 13]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const results = generateResultStatistics(
      lottos,
      winningNumbers,
      bonusNumber
    );

    expect(results[1].count).toBe(1); // 1등 당첨
    expect(results[2].count).toBe(1); // 2등 당첨
    expect(results[5].count).toBe(0); // 5등 미당첨
  });

  test("총 당첨 금액을 올바르게 계산", () => {
    const results = {
      1: { count: 1, prize: 2000000000 },
      2: { count: 0, prize: 30000000 },
      3: { count: 1, prize: 1500000 },
      4: { count: 0, prize: 50000 },
      5: { count: 2, prize: 5000 },
    };
    const totalPrize = calculateTotalPrize(results);
    const expectedTotalPrize = 2000000000 + 1500000 + 2 * 5000;
    expect(totalPrize).toBe(expectedTotalPrize);
  });
});
