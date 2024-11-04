import { Console } from "@woowacourse/mission-utils";
import { LOTTORESULTTABLE } from "../src/Pickup";

export const REWARD = {
  "당첨 없음": 0,
  "3개 일치": 5000,
  "4개 일치": 50000,
  "5개 일치": 1500000,
  "5개 일치 + 보너스": 30000000,
  "6개 일치": 2000000000,
};

export class FormatOutput {
  #money;
  #result;
  constructor(money, result) {
    this.#money = money;
    this.#result = result;
  }

  formatNumber(number) {
    // TODO: Util.js에 분리하기
    return new Intl.NumberFormat().format(number);
  }

  format() {
    Console.print("당첨 통계");
    const intermediate = Object.entries(LOTTORESULTTABLE)
      .filter((pair) => pair[1] !== "당첨 없음")
      .map((pair) => {
        return `${pair[1]} (${this.formatNumber(REWARD[pair[1]])}원) - ${
          this.#result[pair[1]]
        }개`;
      })
      .reduce((prev, curr) => {
        return `${prev}\n${curr}`;
      }, "---");
    const profit = (
      Object.entries(REWARD)
        .filter((pair) => pair[0] !== "당첨 없음")
        .reduce((prev, curr) => {
          return prev + curr[1] * this.#result[curr[0]];
        }, 0) / this.#money
    ).toFixed(1);
    const result = `${intermediate}\n총 수익률은 ${this.formatNumber(
      profit
    )}\%입니다.`;
    Console.print(result);
    return result;
  }
}
