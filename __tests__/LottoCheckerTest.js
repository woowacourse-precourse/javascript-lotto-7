import LottoChecker from "../src/LottoChecker.js";

describe("로또 체커 클래스 테스트", () => {
  let lottoChecker;
  beforeEach(() => {
    lottoChecker = new LottoChecker();
  });
  describe("isWinningNumber 메서드", () => {
    test("당첨 번호를 등록하면, 번호의 일치 여부를 확인할 수 있다.", () => {
      lottoChecker.createWinningNumbers("1,2,3,4,5,6");

      expect(lottoChecker.isWinningNumber(1)).toBe(true);
      expect(lottoChecker.isWinningNumber(7)).toBe(false);
    });
  });

  describe("isBonusNumber 메서드", () => {
    test("보너스 번호를 등록하면, 번호의 일치 여부를 확인할 수 있다.", () => {
      lottoChecker.createBonusNumber("7");

      expect(lottoChecker.isBonusNumber(7)).toBe(true);
      expect(lottoChecker.isBonusNumber(1)).toBe(false);
    });
  });

  describe("checkLotto 메서드", () => {
    test("사용자가 구매한 로또의 번호 일치 개수를 확인할 수 있다.", () => {
      lottoChecker.createWinningNumbers("1,2,3,4,5,6");
      lottoChecker.createBonusNumber("7");

      expect(lottoChecker.checkLotto([1, 2, 3, 4, 5, 6])).toEqual({
        winningCount: 6,
        isMatchBonus: false,
      });
      expect(lottoChecker.checkLotto([1, 2, 3, 4, 5, 7])).toEqual({
        winningCount: 5,
        isMatchBonus: true,
      });
    });
  });
});
