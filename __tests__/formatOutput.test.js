import { REWARD, FormatOutput } from "../src/formatOutput";
import { LOTTORESULTTABLE } from "../src/Pickup";

/*
import {
  ERROR_MESSAGE_OUTPUT
} from "../src/ErrorMessage.js";
*/

const TEST_OBJECT = {
  "당첨 없음": 0,
  "3개 일치": 0,
  "4개 일치": 1,
  "5개 일치": 0,
  "5개 일치 + 보너스": 1,
  "6개 일치": 0,
};

describe("출력 테스트", () => {
  test("FormatOutput.format() 테스트", () => {
    const money = 9000;
    const f1 = new FormatOutput(money, TEST_OBJECT);
    const intermediate = Object.entries(LOTTORESULTTABLE)
      .filter((pair) => pair[1] !== "당첨 없음")
      .map((pair) => {
        return `${pair[1]} (${f1.formatNumber(REWARD[pair[1]])}원) - ${
          TEST_OBJECT[pair[1]]
        }개`;
      })
      .reduce((prev, curr) => {
        return `${prev}\n${curr}`;
      }, "---");
    const totalReward = Object.values(LOTTORESULTTABLE).reduce((prev, curr) => {
      return prev + REWARD[curr] * TEST_OBJECT[curr];
    }, 0);
    const profitRatio = (totalReward / money).toFixed(1);
    expect(f1.format()).toBe(
      `${intermediate}\n총 수익률은 ${f1.formatNumber(profitRatio)}\%입니다.`
    );

    // TODO: add exception cases
  });
});
