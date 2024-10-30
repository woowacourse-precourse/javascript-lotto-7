import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/Message.js";

class LottoInput {
  async readPurchaseMoney() {
    return Console.readLineAsync(MESSAGE.INPUT.PURCHASE_MONEY);
  }
}

export default LottoInput;
