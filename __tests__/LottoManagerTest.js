import { LottoManager } from "../src/LottoManager";
import Lotto from "../src/Lotto";
import { Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe("LottoManager 클래스 테스트", () => {
  let lottoManager;

  beforeEach(() => {
    lottoManager = new LottoManager();
    jest.clearAllMocks();
  });

  describe("로또 그룹 생성 테스트", () => {
    test("입력된 크기만큼 로또 그룹이 생성된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);

      lottoManager.setLotteryGroup(5);
      const group = lottoManager.getLotteryGroup();

      expect(group.length).toBe(5);
      expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(5);
    });

    test("로또 그룹의 불변성이 유지된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);

      lottoManager.setLotteryGroup(3);
      const group = lottoManager.getLotteryGroup();

      // 반환된 그룹을 수정해도 원본에 영향이 없어야 함
      group.push(new Lotto([7, 8, 9, 10, 11, 12]));
      const newGroup = lottoManager.getLotteryGroup();

      expect(newGroup.length).toBe(3);
    });
  });

  describe("당첨 계산 테스트", () => {
    beforeEach(() => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
      lottoManager.setLotteryGroup(1);
    });

    test("6개 번호 일치 시 1등", () => {
      const result = lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 7);
      const firstPrize = result.find((prize) => prize.match === 6);

      expect(firstPrize.count).toBe(1);
    });

    test("5개 번호 + 보너스 번호 일치 시 2등", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 7]);
      lottoManager.setLotteryGroup(1);

      const result = lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 7);
      const secondPrize = result.find((prize) => prize.match === 5 && prize.hasBonus);

      expect(secondPrize.count).toBe(1);
    });

    test("5개 번호 + 보너스 번호 불일치 시 3등", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 7]);
      lottoManager.setLotteryGroup(1);

      const result = lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 9);
      const thirdPrize = result.find((prize) => prize.match === 5 && !prize.hasBonus);

      expect(thirdPrize.count).toBe(1);
    });

    test("당첨 결과의 불변성이 유지된다", () => {
      const result = lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 7);
      const originalFirstPrizeCount = result.find((prize) => prize.match === 6).count;

      // 반환된 결과를 수정해도 원본에 영향이 없어야 함
      result.find((prize) => prize.match === 6).count = 999;
      const newResult = lottoManager.getLotteryResult();

      expect(newResult.find((prize) => prize.match === 6).count).toBe(originalFirstPrizeCount);
    });
  });

  describe("수익률 계산 테스트", () => {
    test("1등 당첨시 수익률이 올바른 형식으로 반환된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
      lottoManager.setLotteryGroup(1);

      lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 7); // 1등
      const roi = lottoManager.calculateROI(1000);

      expect(roi).toBe("200,000,000.0%");
    });

    test("수익률이 없을 때도 소수점 첫째자리까지 표시된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
      lottoManager.setLotteryGroup(1);

      lottoManager.calculatePrize([7, 8, 9, 10, 11, 12], 13); // 미당첨
      const roi = lottoManager.calculateROI(1000);

      expect(roi).toBe("0.0%");
    });

    test("소수점이 있는 수익률도 올바르게 표시된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 7, 8]); // 두 장 모두 4개 일치
      lottoManager.setLotteryGroup(2);

      lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 9); // 4개 일치 x 2장
      const roi = lottoManager.calculateROI(2000);

      // 10만원(5만원x2장) 당첨 / 2000원 구매 = 5000%
      expect(roi).toBe("5,000.0%");
    });

    test("1000 이상의 수익률은 콤마가 포함되어 표시된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 7]);
      lottoManager.setLotteryGroup(1);

      lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 7); // 5개 일치 + 보너스볼 일치 (2등)
      const roi = lottoManager.calculateROI(1000);

      // 3천만원 당첨 / 1000원 구매 = 3,000,000.0%
      expect(roi).toBe("3,000,000.0%");
    });

    test("100만% 이상의 큰 수익률도 올바르게 표시된다", () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
      lottoManager.setLotteryGroup(1);

      lottoManager.calculatePrize([1, 2, 3, 4, 5, 6], 7); // 1등
      const roi = lottoManager.calculateROI(100);

      // 20억 당첨 / 100원 구매 = 2,000,000,000.0%
      expect(roi).toBe("2,000,000,000.0%");
    });
  });
});
