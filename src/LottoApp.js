import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_PRICE, ERROR_MESSAGES, MESSAGES } from "./constants.js";

class LottoApp {
  async promptPurchaseAmount() {
    try {
      const amount = await MissionUtils.Console.readLineAsync(
        MESSAGES.PURCHASE_AMOUNT_PROMPT
      );
      this.validateAmount(amount);
      return Number(amount);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }

  validateAmount(amount) {
    const parsedAmount = Number(amount);
    if (
      isNaN(parsedAmount) ||
      parsedAmount <= 0 ||
      parsedAmount % LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }
}

export default LottoApp;
