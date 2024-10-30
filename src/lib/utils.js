import { MissionUtils } from "@woowacourse/mission-utils";

export const read = async (input) => {
  try {
    return await MissionUtils.Console.readLineAsync(input);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const print = (input) => MissionUtils.Console.print(input);

export const random = (min, max, count) =>
  MissionUtils.Random.pickUniqueNumbersInRange(min, max, count);
