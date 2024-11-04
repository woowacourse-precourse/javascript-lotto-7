import RankResult from "../../src/models/RankResult";

describe("RankResult 클래스 테스트", () => {
  describe("당첨 결과 등록 테스트", () => {
    test("6개 일치 시 1등 로또의 개수를 갱신한다", () => {
      // given
      const rankResult = new RankResult();

      // when
      rankResult.registerRank(6, false); // 일치하는 개수, 보너스 일치 여부

      // then
      const result = rankResult.getLottoRankResult();
      expect(result.rank.first.getCount()).toBe(1);
      expect(result.rank.second.getCount()).toBe(0);
      expect(result.rank.third.getCount()).toBe(0);
      expect(result.rank.fourth.getCount()).toBe(0);
      expect(result.rank.fifth.getCount()).toBe(0);
    });

    test("5개 일치와 보너스 번호 일치 시 2등 로또의 개수를 갱신한다", () => {
      // given
      const rankResult = new RankResult();

      // when
      rankResult.registerRank(5, true);

      // then
      const result = rankResult.getLottoRankResult();
      expect(result.rank.first.getCount()).toBe(0);
      expect(result.rank.second.getCount()).toBe(1);
      expect(result.rank.third.getCount()).toBe(0);
      expect(result.rank.fourth.getCount()).toBe(0);
      expect(result.rank.fifth.getCount()).toBe(0);
    });
  });

  describe("수익률 계산 테스트", () => {
    test("랭킹에 등록된 로또가 없다면 수익률은 0%이다", () => {
      // given
      const rankResult = new RankResult();
      const lottoCount = 5;

      // when
      rankResult.calculateProfit(lottoCount);

      // then
      const result = rankResult.getLottoRankResult();
      expect(result.profit).toBe("0.0");
    });

    test("여러 랭킹에 대해 수익률을 정확히 계산한다", () => {
      // given
      const rankResult = new RankResult();
      rankResult.registerRank(5, true); // 2등
      rankResult.registerRank(4, false); // 4등
      const lottoCount = 5;

      // when
      rankResult.calculateProfit(lottoCount);

      // then
      const result = rankResult.getLottoRankResult();
      // ((30000000 + 50000) / 5000) * 100 = 601000.0%
      expect(result.profit).toBe("601000.0");
    });
  });
});
