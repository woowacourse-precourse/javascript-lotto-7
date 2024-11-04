import ResultFormatter from "../../src/LottoGame/Features/ResultFormatter.js";

describe("ResultFormatter", () => {
  test("formats the results correctly in reverse order", () => {
    const results = [
      { rank: 5, count: 3 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 2 },
      { rank: 1, count: 1 },
    ];

    const resultFormatter = new ResultFormatter(results);
    const expectedOutput = [
      "3개 일치 (5,000원) - 3개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 2개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    expect(resultFormatter.getOutput()).toEqual(expectedOutput);
  });
});
