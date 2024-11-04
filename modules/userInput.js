import { Console } from "@woowacourse/mission-utils";
import {
  bonusNumberValidate,
  purchaseAmountValidate,
  winningNumbersValidate,
} from "./inputValidator.js";

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

export async function getValidatedWinningNumbers() {
  while (true) {
    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    try {
      winningNumbersValidate(winningNumbers);
      return winningNumbers.split(",").map(Number);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export async function getValidatedBonusNumber() {
  while (true) {
    const bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );

    try {
      bonusNumberValidate(bonusNumber);
      return Number(bonusNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }
}
