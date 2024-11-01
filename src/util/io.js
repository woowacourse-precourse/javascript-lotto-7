import { Console } from "@woowacourse/mission-utils";

export function print(value) {
  return Console.print(value);
}

export function printEmptyLine() {
  return Console.print("");
}

export async function read(value) {
  return await Console.readLineAsync(value);
}
