import { Console, MissionUtils } from "@woowacourse/mission-utils";

function readUserInput(message) {
  return Console.readLineAsync(message);
};

function generateLottoNumbers(min, max, number) {
  return MissionUtils.Random.pickUniqueNumbersInRange(min, max, number);
};

export {
  readUserInput,
  generateLottoNumbers
};