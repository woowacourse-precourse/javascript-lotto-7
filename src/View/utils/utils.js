import { MissionUtils } from '@woowacourse/mission-utils';

export async function readInput(string) {
  return await MissionUtils.Console.readLineAsync(string);
}

export async function printOutput(string) {
  MissionUtils.Console.print(string);
}
