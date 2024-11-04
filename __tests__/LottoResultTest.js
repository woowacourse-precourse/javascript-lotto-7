import LottoResult from "../src/LottoResult";
import { RESULT } from "../src/constants/result";
import { LOTTO_PRICE } from "../src/constants/lotto";
import { RATE_OF_RETURN } from "../src/constants/output";

describe("LottoResult", () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult(5); // 5장 구매
  });

  describe("calculateResults", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    test("모든 번호가 일치하는 경우", () => {
      const lottos = [[1, 2, 3, 4, 5, 6]];
      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);

      const statistics = lottoResult.generateStatistics();
      expect(statistics).toContain(`${RESULT.SIX.message} - 1개`);
    });

    test("5개 일치 + 보너스 번호 일치하는 경우", () => {
      const lottos = [[1, 2, 3, 4, 5, 7]];
      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);

      const statistics = lottoResult.generateStatistics();
      expect(statistics).toContain(`${RESULT.FIVE_BONUS.message} - 1개`);
    });

    test("5개만 일치하는 경우", () => {
      const lottos = [[1, 2, 3, 4, 5, 8]];
      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);

      const statistics = lottoResult.generateStatistics();
      expect(statistics).toContain(`${RESULT.FIVE.message} - 1개`);
    });

    test("4개 일치하는 경우", () => {
      const lottos = [[1, 2, 3, 4, 8, 9]];
      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);

      const statistics = lottoResult.generateStatistics();
      expect(statistics).toContain(`${RESULT.FOUR.message} - 1개`);
    });

    test("3개 일치하는 경우", () => {
      const lottos = [[1, 2, 3, 8, 9, 10]];
      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);

      const statistics = lottoResult.generateStatistics();
      expect(statistics).toContain(`${RESULT.THREE.message} - 1개`);
    });
  });

  describe("수익률 계산", () => {
    test("1등 당첨시 수익률 계산", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const lottos = [[1, 2, 3, 4, 5, 6]]; // 1등 당첨

      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);
      const statistics = lottoResult.generateStatistics();

      const expectedPrize = RESULT.SIX.prize;
      const expectedProfitRate = (
        (expectedPrize / (5 * LOTTO_PRICE)) *
        100
      ).toFixed(1);
      expect(statistics[statistics.length - 1]).toBe(
        RATE_OF_RETURN(expectedProfitRate.toLocaleString())
      );
    });

    test("당첨되지 않았을 때 수익률 계산", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const lottos = [[7, 8, 9, 10, 11, 12]]; // 미당첨

      lottoResult.calculateResults(lottos, winningNumbers, bonusNumber);
      const statistics = lottoResult.generateStatistics();

      expect(statistics[statistics.length - 1]).toBe(RATE_OF_RETURN("0.0"));
    });
  });
});
