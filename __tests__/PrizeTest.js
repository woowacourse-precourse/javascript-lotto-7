import Prize from "../src/Prize.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("Prize 클래스 테스트", () => {
  test.each([
    {
      matchingNumber: 3,
      price: 5000,
      isBonus: false,
      log: "3개 일치 (5,000원) - 0개",
    },
    {
      matchingNumber: 4,
      price: 50000,
      isBonus: false,
      log: "4개 일치 (50,000원) - 0개",
    },
    {
      matchingNumber: 5,
      price: 1500000,
      isBonus: false,
      log: "5개 일치 (1,500,000원) - 0개",
    },
    {
      matchingNumber: 5,
      price: 30000000,
      isBonus: true,
      log: "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
    },
    {
      matchingNumber: 6,
      price: 2000000000,
      isBonus: false,
      log: "6개 일치 (2,000,000,000원) - 0개",
    },
  ])("생성 테스트 %o", ({ matchingNumber, price, isBonus, log }) => {
    const prize = new Prize(matchingNumber, price, isBonus);

    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    prize.printResult();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test.each([
    { matchingNumber: 3, price: 5000, isBonus: false },
    { matchingNumber: 4, price: 50000, isBonus: false },
    { matchingNumber: 5, price: 30000000, isBonus: true },
  ])("addCount 테스트 %o", ({ matchingNumber, price, isBonus, log }) => {
    const prize = new Prize(matchingNumber, price, isBonus);
    expect(prize.getPrizeCount()).toBe(0);

    prize.addCount();

    expect(prize.getPrizeCount()).toBe(price);
  });
});
