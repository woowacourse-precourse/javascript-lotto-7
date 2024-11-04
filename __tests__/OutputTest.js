import Output from "../src/utils/Output.js";
import { MESSAGES } from "../src/constants/constants.js";
import { Console } from "@woowacourse/mission-utils";

describe("Output 테스트", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(Console, "print");
    consoleSpy.mockClear();
  });

  test("구매한 로또 개수를 출력한다.", () => {
    Output.printCountOfLotto(5);
    expect(consoleSpy).toHaveBeenCalledWith(MESSAGES.PURCHASED_COUNT(5));
  });

  test("로또 번호를 출력한다.", () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    Output.printLotto([ticket]);
    expect(consoleSpy).toHaveBeenCalledWith(MESSAGES.LOTTO_NUMBERS(ticket));
  });

  test("당첨 결과를 출력한다.", () => {
    const result = { FIRST: 1, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1 };
    Output.printResults(result);
    expect(consoleSpy).toHaveBeenCalledWith(MESSAGES.RESULT_STATISTICS);
    expect(consoleSpy).toHaveBeenCalledWith(MESSAGES.MATCH_COUNT(3, 5000, 1));
    expect(consoleSpy).toHaveBeenCalledWith(MESSAGES.MATCH_COUNT(4, 50000, 0));
    expect(consoleSpy).toHaveBeenCalledWith(
      MESSAGES.MATCH_COUNT(5, 1500000, 0)
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      MESSAGES.BONUS_MATCH_COUNT(30000000, 0)
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      MESSAGES.MATCH_COUNT(6, 2000000000, 1)
    );
  });

  test("수익률을 출력한다.", () => {
    const rate = 1550.5;
    Output.printProfitRate(rate);
    expect(consoleSpy).toHaveBeenCalledWith(MESSAGES.TOTAL_PROFIT_RATE(rate));
  });
});
