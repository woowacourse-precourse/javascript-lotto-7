import { Console } from "@woowacourse/mission-utils";
import { printErrorMessage } from "./printErrorMessage.js";
import { validatePurchaseAmount } from "./validator.js";

export const getPurchaseAmount = async () => {
  while (true) {
    try {
      const purchaseAmountInput = await Console.readLineAsync(
        "구입금액을 입력해 주세요."
      );
      const purchaseAmount = Number(
        purchaseAmountInput.trim().replace(/[,\s]/g, "")
      );

      validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      printErrorMessage(error.message);
    }
  }
};
