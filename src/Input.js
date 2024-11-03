import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/message.js";

class Input {
  static async getPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_AMOUNT
    );

    return { purchaseAmount: Number(purchaseAmountInput) };
  }

  static async getLottoWinningNumber() {
    const lottoWinningNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.LOTTO_NUMBER
    );

    const lottoWinningNumber = new Set(
      lottoWinningNumberInput.split(",").map(Number)
    );

    return { lottoWinningNumber };
  }

  static async getBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.BONUS_NUMBER
    );

    return { bonusNumber: Number(bonusNumberInput) };
  }
}

export default Input;
