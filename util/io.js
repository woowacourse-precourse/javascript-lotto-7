import { Console } from "@woowacourse/mission-utils";

export function print(value) {
  return Console.print(value);
}

export async function read(value) {
  return await Console.readLineAsync(value);
}
