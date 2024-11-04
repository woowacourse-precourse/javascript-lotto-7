import { formatNumber } from "./Utils.js";
import { Console } from "@woowacourse/mission-utils";
import { REWARD, LOTTO_RESULT_TABLE } from "./Constant.js";

export class FormatOutput {
  #money;
  #result;
  constructor(money, result) {
    this.#money = money;
    this.#result = result;
  }

  print() {
    const intermediate = Object.entries(LOTTO_RESULT_TABLE)
      .filter((pair) => pair[1] !== "당첨 없음")
      .map((pair) => {
        const message = `${pair[1]} (${formatNumber(REWARD[pair[1]])}원) - ${
          this.#result[pair[1]]
        }개`;
        Console.print(message);
        return message;
      })
      .reduce((previous, current) => {
        return `${previous}\n${current}`;
      }, "---");
    const profit = (
      (Object.entries(REWARD)
        .filter((pair) => pair[0] !== "당첨 없음")
        .reduce((previous, current) => {
          return previous + current[1] * this.#result[current[0]];
        }, 0) *
        100) /
      this.#money
    ).toFixed(1);
    const result = `총 수익률은 ${formatNumber(profit)}\%입니다.`;
    Console.print(result);
    return `${intermediate}\n${result}`;
  }
}
