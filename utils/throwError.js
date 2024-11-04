import { Console } from "@woowacourse/mission-utils";

export default function throwError(message) {
  Console.print(`[ERROR] ${message}`);
  throw new Error(`[ERROR] ${message}`);
}
