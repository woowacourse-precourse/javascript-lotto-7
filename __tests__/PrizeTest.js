import Prize from '../src/Prize.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('Prize 클래스 테스트', () => {


  test("생성 테스트", () => {
    const prize = new Prize(3, 5000, false);

    const log = '3개 일치 (5,000원) - 0개';
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    prize.printResult();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("addCount 테스트", () => {
    const prize = new Prize(3, 5000, false);
    expect(prize.getPrizeCount()).toBe(0);

    prize.addCount();

    expect(prize.getPrizeCount()).toBe(5000);
  });
});