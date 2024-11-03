import { MissionUtils } from "@woowacourse/mission-utils";

const readUserInput = async (message) =>
  await MissionUtils.Console.readLineAsync(message);

const printResult = (message) => MissionUtils.Console.print(message);

const _pipe =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);

export { readUserInput, printResult, _pipe };
