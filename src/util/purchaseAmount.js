import { Console } from "@woowacourse/mission-utils";
import ERROR_MESSAGE_LIST from "../constant/errorMessageList.js";
const purchaseAmount = async () => {
  const UNIT = 1000;
  const money = await Console.readLineAsync("구입 금액을 입력해주세요.\n");

  if (!money || money.trim() === "") {
    throw new Error(ERROR_MESSAGE_LIST.EMPTY_MONEY);
  }
  if (isNaN(money)) {
    throw new Error(ERROR_MESSAGE_LIST.NOT_A_NUMBER);
  }
  if (money <= 0) {
    throw new Error(ERROR_MESSAGE_LIST.POSITIVE_NUMBER);
  }
  if (money % UNIT !== 0) {
    throw new Error(ERROR_MESSAGE_LIST.NOT_THOUSAND_UNIT);
  }
  return money / UNIT;
};
export default purchaseAmount;
