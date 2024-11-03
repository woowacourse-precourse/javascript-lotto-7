import { Console } from "@woowacourse/mission-utils";

export function printRevenue(revenue, amount) {
  const rate = (revenue / amount) * 100;
  const roundedRate = parseFloat(rate.toFixed(2));
  Console.print(`총 수익률은 ${roundedRate}%입니다.`);
}
