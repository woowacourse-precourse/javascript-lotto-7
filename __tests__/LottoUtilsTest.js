import generateLotto from "../src/lottoUtils/generateLotto";
import generateLottoByAmount from "../src/lottoUtils/generateLottoByAmount";
import Lotto from "../src/Lotto";

describe("lotto utils 함수 테스트", () => {
  test("로또 생성 및 반환", () => {
    const lotto = generateLotto();
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test("구매 금액에 따른 로또 생성", () => {
    const lottos = generateLottoByAmount(5035);
    expect(lottos.length).toBe(5);
  });
});
