import PurchasedLotto from "../src/Model/PurchasedLotto.js";
import { EarningTable } from "../src/View/EarningTable.js";

describe("PuchasedLotto 클래스 테스트", () => {
  let testLotto;

  beforeEach(() => {
    testLotto = new PurchasedLotto([1, 2, 3, 4, 5, 6]);
  });

  test("Lotto - countingMatchedTotalNumbers 메서드 테스트", () => {
    testLotto.countingMatchedTotalNumbers([1, 2, 3, 4, 5, 7], 6);

    const totalCnt = testLotto.getMatchedTotalCnt();
    const matchedNumCnt = testLotto.getMatchedNumberCnt();
    const isBonusMatched = testLotto.getIsMatchedBonusNumber();
    const rank = testLotto.getRank();

    const testLotto2 = new PurchasedLotto([1, 2, 3, 4, 5, 6]);
    testLotto2.countingMatchedTotalNumbers([11, 12, 13, 14, 15, 16], 17);
    const rank2 = testLotto2.getRank();

    expect(totalCnt).toBe(6);
    expect(matchedNumCnt).toBe(5);
    expect(isBonusMatched).toBe(true);
    expect(rank.prize).toBe(30000000);
    expect(rank2.prize).toBe(0);
  });

  test("Lotto - rankingLotto 메서드 테스트", () => {
    const testLotto2 = new PurchasedLotto([1, 2, 3, 4, 5, 6]);
    const testLotto3 = new PurchasedLotto([1, 2, 3, 4, 5, 6]);

    // 총 맞춘 횟수 (당첨 번호에서 맞춘 횟수, 보너스 번호에서 맞춘 횟수)
    // 총 맞춘 횟수 (4, 1)
    testLotto.countingMatchedTotalNumbers([1, 2, 3, 4, 10, 11], 6);
    // 총 맞춘 횟수 (5, 1)
    testLotto2.countingMatchedTotalNumbers([1, 2, 3, 4, 5, 10], 6);
    // 총 맞춘 횟수 (6, 0)
    testLotto3.countingMatchedTotalNumbers([1, 2, 3, 4, 5, 6], 7);

    const rankTestLotto = testLotto.getRank();
    const rankTestLotto2 = testLotto2.getRank();
    const rankTestLotto3 = testLotto3.getRank();

    expect(rankTestLotto).toBe(EarningTable.FOURTH);
    expect(rankTestLotto2).toBe(EarningTable.SECOND);
    expect(rankTestLotto3).toBe(EarningTable.FIRST);
  });
});
