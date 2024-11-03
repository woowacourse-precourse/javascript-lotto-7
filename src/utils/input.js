import { Console } from "@woowacourse/mission-utils";
import { printErrorMessage } from "./printErrorMessage.js";
import {
  validateBonusNumber,
  validateNumbers,
  validatePurchaseAmount,
} from "./validator.js";
import { NUMBER_SEPARATOR } from "../constants/gameRules.js";

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

export const getNumbers = async (message) => {
  while (true) {
    try {
      const numbersInput = await Console.readLineAsync(message);
      const numbers = numbersInput
        .trim()
        .replace(/[\s]/g, "")
        .split(NUMBER_SEPARATOR)
        .map((string) => Number(string));

      validateNumbers(numbers);

      return numbers;
    } catch (error) {
      printErrorMessage(error.message);
    }
  }
};

export const getBonusNumber = async (winningNumbers) => {
  while (true) {
    try {
      const bonusNumberInput = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요."
      );
      const bonusNumber = Number(bonusNumberInput);

      validateBonusNumber(winningNumbers, bonusNumber);

      return bonusNumber;
    } catch (error) {
      printErrorMessage(error.message);
    }
  }
};
