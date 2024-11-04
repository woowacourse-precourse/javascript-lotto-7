import LottoResult from "../../src/LottoGame/LottoResult.js";

describe("LottoResult", () => {
  test("주어진 랭크에 따라 결과를 올바르게 생성한다", () => {
    const ranks = [1, 3, 3, 2, 2, 1];
    const lottoResult = new LottoResult(ranks);

    const expectedResults = [
      { rank: 5, count: 2 },
      { rank: 4, count: 2 },
      { rank: 3, count: 2 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];

    expect(lottoResult.getResults()).toEqual(expectedResults);
  });
});
