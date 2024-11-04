import Lotto from "../../src/models/Lotto";
import LottoHistory from "../../src/models/LottoHistory";

describe("LottoHistory 클래스 테스트", () => {
  let lottoHistory;
  const lottoCount = 5;

  beforeEach(() => {
    lottoHistory = new LottoHistory(lottoCount);
  });

  describe("초기 상태 테스트", () => {
    test("LottoHistory 인스턴스가 정상적으로 생성되어야 한다", () => {
      const purchaseHistory = lottoHistory.getPurchaseHistory();

      expect(purchaseHistory.lottoCount).toBe(lottoCount);
      expect(purchaseHistory.lottos).toHaveLength(0);
    });
  });

  describe("로또 추가 테스트", () => {
    test("로또를 추가하면 구매 내역에 반영되어야 한다", () => {
      // given
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      // when
      lottoHistory.addLotto(lotto);
      const purchaseHistory = lottoHistory.getPurchaseHistory();

      // then
      expect(purchaseHistory.lottos).toHaveLength(1);
      expect(purchaseHistory.lottos[0]).toBe(lotto);
    });

    test("여러 개의 로또를 추가할 수 있어야 한다", () => {
      // given
      const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
      const lotto2 = new Lotto([1, 3, 4, 6, 8, 10]);

      // when
      lottoHistory.addLotto(lotto1);
      lottoHistory.addLotto(lotto2);
      const purchaseHistory = lottoHistory.getPurchaseHistory();

      // then
      expect(purchaseHistory.lottos).toHaveLength(2);
      expect(purchaseHistory.lottos).toContain(lotto1);
      expect(purchaseHistory.lottos).toContain(lotto2);
    });
  });
});
