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
});
