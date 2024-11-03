import { Console } from "@woowacourse/mission-utils";

class View {
  getPurchaseMoney = async () => {
    const PURCHASE_MONEY =
      await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    return PURCHASE_MONEY;
  };
}

export default View;
