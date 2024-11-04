import LottoGame from "../src/LottoGame";

describe("LottoGame 클래스 테스트", () => {
  let lottoGame;

  beforeEach(() => {
    const purchaseAmount = 10000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottoGame = new LottoGame(purchaseAmount, winningNumbers, bonusNumber);
  });

  test("입력한 구매 금액에 맞는 로또 구매 수량이 정확히 계산된다.", () => {
    expect(lottoGame.lottoCount).toBe(10);
  });

  test("구매 수량에 맞는 로또 티켓이 발행된다.", () => {
    lottoGame.setLottos();
    expect(lottoGame.lottos.length).toBe(10);
  });

  test("로또 번호가 6개 모두 제대로 생성된다.", () => {
    lottoGame.setLottos();
    lottoGame.lottos.forEach((lotto) => {
      expect(lotto.getNumbers().length).toBe(6);
    });
  });
});
