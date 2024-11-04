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
export const getResult = async (winningStatus) => {
  const formattedResults = WINNING_RANK.map(
    ({ description, reward }, index) => {
      const count = winningStatus[index];
      return `${description} (${reward.toLocaleString()}원) - ${count}개`;
    }
  );

  for (const resultMessage of formattedResults) {
    await Console.print(resultMessage);
  }
};
