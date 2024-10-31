import { MissionUtils } from "@woowacourse/mission-utils";

const readUserInput = async (message) => {
  return await MissionUtils.Console.readLineAsync(message);
};

export default readUserInput;
