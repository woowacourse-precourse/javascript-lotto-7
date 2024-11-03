import LottoMatchChecker from "../src/LottoMatchChecker";
import LottoService from "../src/LottoService";
import WinningStatsManager from "../src/WinningStatsManager";
import LottoIssuer from "../src/LottoIssuer";
import PurchaseManager from "../src/PurchaseManager";
import { PRIZE_MONEY_BY_RANK, LOTTO_PRICE } from "../src/constants";

describe("LottoService 클래스 테스트", () => {
  const purchaseManager = new PurchaseManager(LOTTO_PRICE);
  const lottoMatchChecker = new LottoMatchChecker();
  const lottoIssuer = new LottoIssuer();
  const winningStatsManager = new WinningStatsManager();
  const lottoService = new LottoService(purchaseManager, lottoMatchChecker, lottoIssuer, winningStatsManager);

  const bonusNumber = 4;
  const winningNumbers = [1, 3, 5, 7, 9, 10];

  test("구매가능한 로또의 개수를 구할 수 있다.", () => {
    expect(lottoService.getMaxLottoCount(3000)).toBe(3);
  });

  test("당첨번호와 일치 개수를 담은 배열을 받을 수 있다.", () => {
    lottoService.addLotto([1, 3, 5, 7, 9, 10]);
    lottoService.addLotto([1, 3, 4, 5, 7, 9]);

    expect(lottoService.aggregateLottoResults(bonusNumber, winningNumbers)).toEqual([
      [6, false],
      [5, true],
    ]);
  });

  test("당첨 통계를 구할 수 있다.", () => {
    expect(lottoService.getWinningStats(bonusNumber, winningNumbers)).toEqual({
      match_6: 1,
      match_5_bonus: 1,
      match_5: 0,
      match_4: 0,
      match_3: 0,
    });
  });

  test("수익률을 구할 수 있다.", () => {
    expect(lottoService.getProfitMargin(LOTTO_PRICE, PRIZE_MONEY_BY_RANK)).toEqual("1015000.0");
  });
});
