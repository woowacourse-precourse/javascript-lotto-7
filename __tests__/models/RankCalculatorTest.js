import Lotto from "../../src/models/Lotto";
import RankCalculator from "../../src/models/RankCalculator";

describe("RankCalculator 클래스 테스트", () => {
  describe("당첨 등수 계산", () => {
    test("여러 장의 로또에 대한 당첨 결과를 올바르게 계산할 수 있다", () => {
      // given
      const purchaseHistory = {
        lottoCount: 3,
        lottos: [
          new Lotto([1, 2, 3, 4, 5, 6]), // 1등
          new Lotto([1, 2, 3, 4, 5, 7]), // 2등
          new Lotto([1, 2, 3, 4, 7, 8]), // 4등
        ],
      };
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);

      // when
      const result = rankCalculator.calculate();

      // then
      const rankResult = result.getLottoRankResult();
      expect(rankResult.rank.first.getCount()).toBe(1);
      expect(rankResult.rank.second.getCount()).toBe(1);
      expect(rankResult.rank.third.getCount()).toBe(0);
      expect(rankResult.rank.fourth.getCount()).toBe(1);
      expect(rankResult.rank.fifth.getCount()).toBe(0);
    });
  });

  describe("수익률 계산 테스트", () => {
    test("수익률을 정확하게 계산할 수 있다", () => {
      // given
      const purchaseHistory = {
        lottoCount: 1,
        lottos: [new Lotto([1, 2, 3, 4, 5, 6])], // 1등
      };
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);

      // when
      const result = rankCalculator.calculate();

      // then
      const rankResult = result.getLottoRankResult();
      // 수익: 20억, 구매금액: 1000원 => 수익률: 200000000.0%
      expect(rankResult.profit).toBe("200000000.0");
    });
  });
});
