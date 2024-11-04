import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/message.js";

const inputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    return input.trim();
  },
};

export default inputView;
