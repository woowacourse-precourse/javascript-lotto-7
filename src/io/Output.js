import { Console } from "@woowacourse/mission-utils";

export const getOutput = async (message) => {
  return await Console.print(message);
};

export const getTicketNumber = async (tickets) => {
  for (const ticket of tickets) {
    await Console.print(ticket);
  }
};
