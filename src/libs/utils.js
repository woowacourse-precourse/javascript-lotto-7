import { MissionUtils } from "@woowacourse/mission-utils";

export async function getInput(input) {
  return MissionUtils.Console.readLineAsync(input);
}

export function printResult(result) {
  MissionUtils.Console.print(result);
}

export function pickUniqueNumbersInRange(start, end, count) {
  return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
}
