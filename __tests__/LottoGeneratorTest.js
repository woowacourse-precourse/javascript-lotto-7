import LottoGenerator from "../src/LottoGenerator.js";

describe("lottoGenerator 클래스 테스트", () => {
  test("금액 입력 시, 구매한 복권들을 출력한다.", () => {
    const lottoGenerator = new LottoGenerator(3000);
    const lottos = lottoGenerator.getLottos();

    expect(lottos).toHaveLength(3),
      lottos.forEach(lotto => {
        expect(lotto).toHaveLength(6);
        lotto.forEach(number => {
          expect(number).toBeGreaterThanOrEqual(1);
          expect(number).toBeLessThanOrEqual(45);
        });
      });
  });
});
