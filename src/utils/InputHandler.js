import { Console } from "@woowacourse/mission-utils";
import { validateBudget } from "./Validator.js";

export async function getTicketCount() {
  const budget = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );

  validateBudget(budget);

  const ticketCount = budget / 1000
  return ticketCount;
}