import { Console } from "@woowacourse/mission-utils";
export default function printReturnRate(returnRate) {
  Console.print(`총 수익률은 ${returnRate.toFixed(1)}%입니다.`);
}
