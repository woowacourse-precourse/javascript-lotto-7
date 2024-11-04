import LottoProcessor from "../src/lotto/LottoProcessor";
import WinningLotto from "../src/lotto/WinningLotto";
import OutputHandler from "../src/io/OutputHandler";
import Lotto from "../src/lotto/Lotto";

describe("LottoProcessor 클래스 테스트", () => {
  let lottoProcessor, winningLotto, outputHandler;

  beforeEach(() => {
    winningLotto = new WinningLotto();
    outputHandler = new OutputHandler();
    lottoProcessor = new LottoProcessor(outputHandler, winningLotto);
  });

  test("당첨 순위 계산", () => {
    winningLotto.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonusNumber(7);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lottoProcessor.PurchaseLottoNumbersArray.push(lotto);

    lottoProcessor.compareLottoNumbers();
    expect(lottoProcessor.getWinningRanks()).toEqual({
      1: 1,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    });
  });

  test("로또 수익률 계산", () => {
    lottoProcessor.winningRanks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
    const rate = lottoProcessor.calculateRateOfReturn(5);
    expect(rate).toEqual(100);
  });
});
