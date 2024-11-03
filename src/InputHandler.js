import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants/constant.js";

class InputHandler {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요\n"
    );
    this.validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  async getWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    return inputWinningNumbers.split(",").map(Number);
  }

  async getBonusNumber(winningNumbers) {
    const inputBonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(inputBonusNumber);
    this.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount === 0)
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_ZERO);
    if (purchaseAmount < 0)
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);
    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    if (purchaseAmount === "")
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_EMPTY);
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER_WITH_WINNING);
    }
  }
}

export default InputHandler;
