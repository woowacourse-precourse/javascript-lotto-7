import { Console } from "@woowacourse/mission-utils";
import { purchaseAmountValidate } from "./inputValidator.js";

export async function getValidatedPurchaseAmount() {
  while (true) {
    const purchaseAmount = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );

    try {
      purchaseAmountValidate(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
