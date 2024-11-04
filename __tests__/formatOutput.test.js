import { FormatOutput } from "../src/FormatOutput";
import { REWARD, LOTTO_RESULT_TABLE } from "../src/Constant";
import { formatNumber } from "../src/Utils";

const TEST_OBJECT = {
  "당첨 없음": 8,
  "3개 일치": 0,
  "4개 일치": 0,
  "5개 일치": 0,
  "5개 일치, 보너스 볼 일치": 1,
  "6개 일치": 0,
};
const MONEY = 9000;
const TEST_PROFIT_RATIO = "333,333.3";

describe("FormatOutput 테스트", () => {
  test("FormatOutput.format() 테스트", () => {
    const f1 = new FormatOutput(MONEY, TEST_OBJECT);
    const intermediate = Object.entries(LOTTO_RESULT_TABLE)
      .filter((pair) => pair[1] !== LOTTO_RESULT_TABLE[0])
      .map((pair) => {
        return `${pair[1]} (${formatNumber(REWARD[pair[1]])}원) - ${
          TEST_OBJECT[pair[1]]
        }개`;
      })
      .reduce((prev, curr) => {
        return `${prev}\n${curr}`;
      }, "---");
    const totalReward = Object.values(LOTTO_RESULT_TABLE).reduce(
      (prev, curr) => {
        return prev + REWARD[curr] * TEST_OBJECT[curr];
      },
      0
    );
    const profitRatio = (totalReward / MONEY).toFixed(1);
    expect(f1.print()).toBe(
      `${intermediate}\n총 수익률은 ${TEST_PROFIT_RATIO}\%입니다.`
    );

    // TODO: add exception cases
  });
});
