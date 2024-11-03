import LottoResult from "../src/LottoResult";

describe("LottoResult 클래스 테스트", () => {
  test("6개 일치 시 1등 개수가 증가한다.", () => {
    const result = new LottoResult();
    result.countMatches(6, false);
    expect(result.matchCounts["1등"]).toBe(1);
  });

  test("5개 일치 + 보너스 일치 시 2등 개수가 증가한다.", () => {
    const result = new LottoResult();
    result.countMatches(5, true);
    expect(result.matchCounts["2등"]).toBe(1);
  });

  test("5개 일치 시 3등 개수가 증가한다.", () => {
    const result = new LottoResult();
    result.countMatches(5, false);
    expect(result.matchCounts["3등"]).toBe(1);
  });

  test("4개 일치 시 4등 개수가 증가한다.", () => {
    const result = new LottoResult();
    result.countMatches(4, false);
    expect(result.matchCounts["4등"]).toBe(1);
  });

  test("3개 일치 시 5등 개수가 증가한다.", () => {
    const result = new LottoResult();
    result.countMatches(3, false);
    expect(result.matchCounts["5등"]).toBe(1);
  });

  test("수익률 계산이 정확한지 확인한다.", () => {
    const result = new LottoResult();
    result.matchCounts = {
      "1등": 1,
      "2등": 0,
      "3등": 0,
      "4등": 0,
      "5등": 0,
    };
    const profitRate = result.calculateProfitRate(1000);
    expect(profitRate).toBe("200000000.0");
  });
});
