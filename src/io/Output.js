import { Console } from "@woowacourse/mission-utils";
import { WINNING_RANK } from "../constants/message.js";

export const getOutput = async (message) => {
  return await Console.print(message);
};

export const getLottoNumber = async (lottos) => {
  for (const lotto of lottos) {
    await Console.print(lotto);
  }
};
