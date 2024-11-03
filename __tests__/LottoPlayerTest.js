import LottoPlayer from "../src/LottoPlayer.js";

describe("로또 발행기 클래스 테스트", () => {
  test("로또 발행 개수 확인", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.setNumberOfLottos(5000);
    lottoPlayer.createLottos();

    expect(lottoPlayer.numberOfLottos).toBe(5);
    expect(lottoPlayer.lottos.length).toBe(5);
  });
});
