import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_STATISTICS, PRIZE } from "../src/constants/constant.js";
import StatisticManager from "../src/StatisticManager.js";
import MatchingResults from "../src/MatchingResults.js";
import Lotto from "../src/Lotto.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe("StatisticManager 클래스 테스트", () => {
  let statisticManager;

  beforeEach(() => {
    statisticManager = new StatisticManager();
    jest.clearAllMocks();
  });

  describe("calculateRate 메서드", () => {
    it("수익률을 계산하여 소수점 첫째 자리까지 반환해야 한다.", () => {
      const matchingResults = {
        three: 1,
        four: 0,
        five: 1,
        fiveBonus: 0,
        six: 0,
      };
      const purchaseAmount = 5000;
      const expectedRate = (
        ((PRIZE.THREE * matchingResults.three + PRIZE.FIVE * matchingResults.five) /
          purchaseAmount) *
        100
      ).toFixed(1);

      const rate = statisticManager.calculateRate(matchingResults, purchaseAmount);
      expect(rate).toBe(expectedRate);
    });
  });

  describe("printStatistics 메서드", () => {
    it("매칭 결과와 수익률을 출력해야 한다.", async () => {
      const matchingResults = {
        three: 1,
        four: 2,
        five: 0,
        fiveBonus: 1,
        six: 0,
      };
      const rate = "150.0";

      await statisticManager.printStatistics(matchingResults, rate);

      expect(Console.print).toHaveBeenCalledWith(MESSAGE_STATISTICS().HEADER);
      expect(Console.print).toHaveBeenCalledWith(
        MESSAGE_STATISTICS(matchingResults.three).MATCH_THREE
      );
      expect(Console.print).toHaveBeenCalledWith(
        MESSAGE_STATISTICS(matchingResults.four).MATCH_FOUR
      );
      expect(Console.print).toHaveBeenCalledWith(
        MESSAGE_STATISTICS(matchingResults.five).MATCH_FIVE
      );
      expect(Console.print).toHaveBeenCalledWith(
        MESSAGE_STATISTICS(matchingResults.fiveBonus).MATCH_FIVE_BONUS
      );
      expect(Console.print).toHaveBeenCalledWith(MESSAGE_STATISTICS(matchingResults.six).MATCH_SIX);
      expect(Console.print).toHaveBeenCalledWith(MESSAGE_STATISTICS(rate).RATE);
    });
  });

  describe("checkMatchingLottos 메서드", () => {
    it("사용자의 로또 번호와 당첨 번호를 비교하여 매칭 결과를 반환해야 한다.", () => {
      const userLottoNumbers = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([7, 8, 9, 10, 11, 12]),
        new Lotto([1, 2, 3, 4, 5, 7]),
      ];
      const winningNumberSet = new Set([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;

      const matchingResults = statisticManager.checkMatchingLottos(
        userLottoNumbers,
        winningNumberSet,
        bonusNumber
      );
      console.log(matchingResults);

      expect(matchingResults.three).toBe(0);
      expect(matchingResults.four).toBe(0);
      expect(matchingResults.five).toBe(0);
      expect(matchingResults.fiveBonus).toBe(1);
      expect(matchingResults.six).toBe(1);
    });
  });
});
