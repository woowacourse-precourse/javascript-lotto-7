import Lotto from "../src/Model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("Lotto - countingMatchedTotalNumbers 메서드 테스트", () => {
    const testLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    testLotto.countingMatchedTotalNumbers([1, 2, 3, 4, 5, 7], 6);

    const totalCnt = testLotto.getMatchedTotalCnt();
    const matchedNumCnt = testLotto.getMatchedNumberCnt();
    const isBonusMatched = testLotto.getIsMatchedBonusNumber();
    const rank = testLotto.getRank();

    const testLotto2 = new Lotto([1, 2, 3, 4, 5, 6]);
    testLotto2.countingMatchedTotalNumbers([11, 12, 13, 14, 15, 16], 17);
    const rank2 = testLotto2.getRank();

    expect(totalCnt).toBe(6);
    expect(matchedNumCnt).toBe(5);
    expect(isBonusMatched).toBe(true);
    expect(rank.prize).toBe(30000000);
    expect(rank2.prize).toBe(0);
  });
});
