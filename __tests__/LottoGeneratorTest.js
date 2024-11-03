import LottoGenerator from "../src/model/LottoGenerator";

describe("로또 생성 클래스 테스트", () => {
  test("1000원 단위가 아닌 금액을 입력하면 에러를 발생시킨다.", () => {
    expect(() => new LottoGenerator(1500)).toThrow(
      "[ERROR] 1000원 단위로 금액을 입력해야 합니다."
    );
  });

  test("buyLotto()는 구매한 로또 수량을 반환한다.", () => {
    const lottoGenerator = new LottoGenerator(3000);
    expect(lottoGenerator.buyLotto()).toBe(3);
  });

  test("generateLotto()는 지정된 수량의 로또를 생성한다.", () => {
    const lottoGenerator = new LottoGenerator(3000);
    const lottoList = lottoGenerator.generateLotto();

    expect(lottoList).toHaveLength(3);
  });
});
