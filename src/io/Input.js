import { Console } from "@woowacourse/mission-utils";

export const getInput = async (message) => {
  return await Console.readLineAsync(message);
};
