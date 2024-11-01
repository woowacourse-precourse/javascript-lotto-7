import LottoPrize from "../src/LottoPrize.js";

describe("로또 당첨 클래스 테스트", () => {
  let lottoPrize;
  beforeEach(() => {
    lottoPrize = new LottoPrize();
  });

  describe("isWinningNumber 메서드", () => {
    test("당첨 번호를 등록하면, 번호의 일치 여부를 확인할 수 있다.", () => {
      lottoPrize.createWinningNumbers("1,2,3,4,5,6");

      expect(lottoPrize.isWinningNumber(1)).toBe(true);
      expect(lottoPrize.isWinningNumber(7)).toBe(false);
    });
  });

  describe("isBonusNumber 메서드", () => {
    test("보너스 번호를 등록하면, 번호의 일치 여부를 확인할 수 있다.", () => {
      lottoPrize.createBonusNumber("7");

      expect(lottoPrize.isBonusNumber(7)).toBe(true);
      expect(lottoPrize.isBonusNumber(1)).toBe(false);
    });
  });

  describe("countMatchNumbers 메서드", () => {
    test("사용자가 구매한 로또의 번호 일치 개수를 확인할 수 있다.", () => {
      lottoPrize.createWinningNumbers("1,2,3,4,5,6");
      lottoPrize.createBonusNumber("7");

      expect(lottoPrize.countMatchNumbers([1, 2, 3, 4, 5, 6])).toEqual({
        winningCount: 6,
        isMatchBonus: false,
      });
      expect(lottoPrize.countMatchNumbers([1, 2, 3, 4, 5, 7])).toEqual({
        winningCount: 5,
        isMatchBonus: true,
      });
    });
  });

  describe("getRank 메서드", () => {
    test("사용자가 구매한 로또의 등수를 확인할 수 있다.", () => {
      lottoPrize.createWinningNumbers("1,2,3,4,5,6");
      lottoPrize.createBonusNumber("7");

      expect(lottoPrize.getRank([1, 2, 3, 4, 5, 6])).toEqual("first");
    });
  });

  describe("getPrize 메서드", () => {
    test("로또 당첨 기준, 금액, 당첨 횟수를 담은 객체를 반환한다.", () => {
      const RANDOM_NUMBERS = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
      lottoPrize.createWinningNumbers("1,2,3,4,5,6");
      lottoPrize.createBonusNumber("7");

      expect(lottoPrize.getPrize(RANDOM_NUMBERS)).toEqual({
        first: { condition: 6, money: 2000000000, count: 1 },
        second: { condition: 5, money: 30000000, count: 0 },
        third: { condition: 5, money: 1500000, count: 0 },
        forth: { condition: 4, money: 50000, count: 0 },
        fifth: { condition: 3, money: 5000, count: 0 },
      });
    });
  });
});
