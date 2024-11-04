import LottoManager from "../src/LottoManager.js";

test("로또 발급 개수 확인", () => {
    const lottos = LottoManager.issueLottos(5000);
    expect(lottos).toHaveLength(5);
});
