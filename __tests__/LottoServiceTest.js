import LottoMatchChecker from "../src/LottoMatchChecker";
import Lotto from "../src/Lotto";
import LottoService from "../src/LottoService";
// 리팩토링 필요
describe("LottoService 클래스 테스트", () => {
  test("당첨 번호와 비교결과를 담은 배열을 얻을 수 있다..", () => {
    const lottos = [new Lotto([1, 3, 5, 7, 9, 10]), new Lotto([1, 3, 4, 5, 7, 9])];
    const lottoMatchChecker = new LottoMatchChecker(4, [1, 3, 5, 7, 9, 10]);
    const lottoService = new LottoService(lottoMatchChecker, lottos);

    expect(lottoService.aggregateLottoResults()).toEqual([
      [6, false],
      [5, true],
    ]);
  });

  test("등수 별 최종 당첨 통계를 얻을 수 있다.", () => {
    const lottos = [new Lotto([1, 3, 5, 7, 9, 10]), new Lotto([1, 3, 4, 5, 7, 9])];
    const lottoMatchChecker = new LottoMatchChecker(4, [1, 3, 5, 7, 9, 10]);
    const lottoService = new LottoService(lottoMatchChecker, lottos);

    expect(lottoService.getWinningStats()).toEqual({
      match_6: 1,
      match_5_bonus: 1,
      match_5: 0,
      match_4: 0,
      match_3: 0,
    });
  });

  test("최종 수익을 구할 수 있다.", () => {
    const lottos = [new Lotto([1, 3, 5, 7, 9, 10]), new Lotto([1, 3, 4, 5, 7, 9])];
    const lottoMatchChecker = new LottoMatchChecker(4, [1, 3, 5, 7, 9, 10]);
    const lottoService = new LottoService(lottoMatchChecker, lottos);
    const winningStats = lottoService.getWinningStats();

    expect(lottoService.calculateTotalProfit(winningStats)).toBe(2030000000);
  });

  test("최종 수익률을 구할 수 있다.", () => {
    const lottos = [new Lotto([1, 3, 5, 7, 9, 10]), new Lotto([1, 3, 4, 5, 7, 9])];
    const lottoMatchChecker = new LottoMatchChecker(4, [1, 3, 5, 7, 9, 10]);
    const lottoService = new LottoService(lottoMatchChecker, lottos);
    const winningStats = lottoService.getWinningStats();

    expect(lottoService.calculateProfitMargin(1000, winningStats)).toBe("1015000.0");
  });
});
