import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGES from "./MESSAGES.js";
import inputValidator from "./inputValidator.js";

const inputHandler = {
  async requestPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      MESSAGES.REQUEST_PURCHASE_AMOUNT
    );
    return inputValidator.checkPurchaseAmount(purchaseAmount);
  },
};

export default inputHandler;
