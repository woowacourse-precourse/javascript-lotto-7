import { Console } from "@woowacourse/mission-utils";

export default async function getPurchaseAmount() {
  const purchaseAmount = await Console.readLineAsync(
    "구입금액을 입력해주세요.\n"
  );
  return purchaseAmount;
}
