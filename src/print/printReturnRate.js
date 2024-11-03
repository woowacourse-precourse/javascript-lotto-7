import { Console } from "@woowacourse/mission-utils";
export default function printReturnRate(returnRate) {
  Console.print(`총 수익률은 ${Math.round(returnRate.toFixed(2))}입니다.\n`);
}
