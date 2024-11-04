import { Console } from "@woowacourse/mission-utils";
import { validateBudget } from "./Validator.js";

export async function getLottoCount() {
  const budget = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );

  validateBudget(budget);

  const lottoCount = budget / 1000
  return lottoCount;
}