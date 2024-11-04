import { Console } from "@woowacourse/mission-utils";

/** 구입금액 입력받기 */
export const getPurchaseAmount = async () => {
  const inputAmount = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );
  if (isNaN(inputAmount) || inputAmount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
  }
  const amount = inputAmount / 1000;
  return amount;
};
