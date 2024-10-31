import LottoStore from "../src/LottoStore.js";

describe("로또판매점 클래스 테스트", () => {
  describe("buyLotto 메서드", () => {
    test("로또 구입 금액에 해당하는 만큼 로또를 발행한다.", () => {
      const lottoStore = new LottoStore(2000);
      expect(lottoStore.buyLotto(2000)).toBe(2);
    });
  });
});
