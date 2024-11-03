import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/messages.js";
import { validatePurchaseAmount } from "../utils/validation.js";

class InputView {
  static async getPurchaseAmount() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(INPUT_MESSAGES.MONEY_INPUT, (input) => {
        try {
          const purchaseAmount = validatePurchaseAmount(input);
          resolve(purchaseAmount);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

export default InputView;
