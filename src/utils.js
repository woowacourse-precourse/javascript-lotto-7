import { Console } from "@woowacourse/mission-utils";

export const readInput = async (string) => {
  return await Console.readLineAsync(string);
};

export const write = async (text) => {
  await Console.print(text);
};
