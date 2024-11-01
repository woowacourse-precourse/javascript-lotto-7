import { MissionUtils } from "@woowacourse/mission-utils";

export async function getInput(input) {
  return MissionUtils.Console.readLineAsync(input);
}

export function printResult(result) {
  MissionUtils.Console.print(result);
}

export function pickUniqueNumbersInRange(start, end, count) {
  const set = new Set();
  while (set.size !== count) {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(start, end, count - set.size);
    set.add(...randomNumbers);
  }
  return Array.from(set);
}
