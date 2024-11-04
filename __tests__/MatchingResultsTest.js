import MatchingResults from "../src/MatchingResults.js";

describe("MatchingResults 클래스 테스트", () => {
  let matchingResults;

  beforeEach(() => {
    matchingResults = new MatchingResults();
  });

  describe("update 메서드", () => {
    it("6개 일치 시, six 카운트가 증가해야 한다.", () => {
      matchingResults.update(6, false);
      expect(matchingResults.getResults().six).toBe(1);
    });

    it("5개 일치 시, 보너스가 없으면 five 카운트가 증가해야 한다.", () => {
      matchingResults.update(5, false);
      expect(matchingResults.getResults().five).toBe(1);
    });

    it("5개 일치 시, 보너스가 있으면 fiveBonus 카운트가 증가해야 한다.", () => {
      matchingResults.update(5, true);
      expect(matchingResults.getResults().fiveBonus).toBe(1);
    });

    it("4개 일치 시, four 카운트가 증가해야 한다.", () => {
      matchingResults.update(4, false);
      expect(matchingResults.getResults().four).toBe(1);
    });

    it("3개 일치 시, three 카운트가 증가해야 한다.", () => {
      matchingResults.update(3, false);
      expect(matchingResults.getResults().three).toBe(1);
    });

    it("매칭되지 않는 경우, 결과에 변화가 없어야 한다.", () => {
      matchingResults.update(2, false);
      const results = matchingResults.getResults();
      expect(results.six).toBe(0);
      expect(results.five).toBe(0);
      expect(results.fiveBonus).toBe(0);
      expect(results.four).toBe(0);
      expect(results.three).toBe(0);
    });
  });

  describe("getResults 메서드", () => {
    it("여러 번 업데이트 후, 올바른 결과를 반환해야 한다.", () => {
      matchingResults.update(6, false);
      matchingResults.update(5, false);
      matchingResults.update(5, true);
      matchingResults.update(4, false);
      matchingResults.update(3, false);

      const results = matchingResults.getResults();
      expect(results.six).toBe(1);
      expect(results.five).toBe(1);
      expect(results.fiveBonus).toBe(1);
      expect(results.four).toBe(1);
      expect(results.three).toBe(1);
    });
  });
});
