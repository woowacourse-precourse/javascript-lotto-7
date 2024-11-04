import LOTTO from "../src/constants/lotto.js";
import LottoGame from "../src/domain/LottoGame.js";

describe("로또 게임 클래스 테스트", () => {
  test(`구입 금액에 해당하는 만큼 로또를 발행해야 한다.`, () => {
    const lottoGame = new LottoGame(LOTTO.UNIT_PRICE * 3);

    const lottosCount = lottoGame.lottoCount();

    expect(lottosCount).toEqual(3);
  });
});
