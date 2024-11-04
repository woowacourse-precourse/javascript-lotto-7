import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants/constant.js";

class InputHandler {
  async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요\n");
      this.validatePurchaseAmount(purchaseAmount);
      console.log(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
      return await this.getPurchaseAmount();
    }
  }

  async getWinningNumbers() {
    try {
      const inputWinningNumbers = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      const winningNumbers = inputWinningNumbers.split(",").map(Number);
      this.validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return await this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const inputBonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = Number(inputBonusNumber);
      this.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber;
    }
  }

  validatePurchaseAmount(purchaseAmount) {
    purchaseAmount = Number(purchaseAmount);
    if (purchaseAmount === 0) throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_ZERO);
    if (purchaseAmount < 0) throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);
    if (purchaseAmount % 1000 !== 0) throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    if (purchaseAmount === "") throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_EMPTY);
  }

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    }
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }
    winningNumbers.forEach((num) => {
      if (!Number.isInteger(num) || num < 1 || num > 45) {
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
      }
    });
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
