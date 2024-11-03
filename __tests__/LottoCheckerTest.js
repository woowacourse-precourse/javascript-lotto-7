import LottoChecker from "../src/LottoChecker";
import Lotto from "../src/Lotto";

describe("LottoChecker 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  describe("당첨 번호 확인", () => {
    test("1등 당첨 확인 (6개 번호 일치)", () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);

      const { results, totalPrize } = checker.checkLottos();

      expect(results[6]).toBe(1);
      expect(totalPrize).toBe(2_000_000_000);
    });

    test("2등 당첨 확인 (5개 번호 + 보너스 번호 일치)", () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 7])];
      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);

      const { results, totalPrize } = checker.checkLottos();

      expect(results["5B"]).toBe(1);
      expect(totalPrize).toBe(30_000_000);
    });

    test("3등 당첨 확인 (5개 번호 일치)", () => {
      const lottos = [new Lotto([1, 2, 3, 4, 5, 8])];
      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);

      const { results, totalPrize } = checker.checkLottos();

      expect(results[5]).toBe(1);
      expect(totalPrize).toBe(1_500_000);
    });

    test("4등 당첨 확인 (4개 번호 일치)", () => {
      const lottos = [new Lotto([1, 2, 3, 4, 8, 9])];
      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);

      const { results, totalPrize } = checker.checkLottos();

      expect(results[4]).toBe(1);
      expect(totalPrize).toBe(50_000);
    });

    test("5등 당첨 확인 (3개 번호 일치)", () => {
      const lottos = [new Lotto([1, 2, 3, 8, 9, 10])];
      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);

      const { results, totalPrize } = checker.checkLottos();

      expect(results[3]).toBe(1);
      expect(totalPrize).toBe(5_000);
    });

    test("미당첨 확인", () => {
      const lottos = [new Lotto([1, 2, 8, 9, 10, 11])];
      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);

      const { results, totalPrize } = checker.checkLottos();

      expect(results[3]).toBe(0);
      expect(totalPrize).toBe(0);
    });
  });

  describe("여러 장의 로또 확인", () => {
    test("여러 장의 로또 당첨 결과 합산", () => {
      const lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([1, 2, 3, 4, 5, 7]),
        new Lotto([1, 2, 3, 8, 9, 10]),
      ];

      const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);
      const { results, totalPrize } = checker.checkLottos();

      expect(results[6]).toBe(1);
      expect(results["5B"]).toBe(1);
      expect(results[3]).toBe(1);
      expect(totalPrize).toBe(2_030_005_000);
    });
  });
});
