import { Console } from "@woowacourse/mission-utils";
import { printErrorMessage } from "./printErrorMessage.js";
import {
  validateBonusNumber,
  validateNumbers,
  validatePurchaseAmount,
} from "./validator.js";
import { parseInputToNumbers, parseMoneyInput } from "./parseString.js";

export const getUserInput = async (promptMessage, validateFunction) => {
  let isValidInput = false;
  while (!isValidInput) {
    try {
      const userInput = await Console.readLineAsync(promptMessage);
      const processedInput = validateFunction(userInput);

      return processedInput;
    } catch (error) {
      printErrorMessage(error.message);
    }
  }
};

export const getPurchaseAmount = async () => {
  return await getUserInput("구입 금액을 입력해 주세요.", (input) => {
    const purchaseAmount = parseMoneyInput(input);

    validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  });
};

export const getNumbers = async (message) => {
  return await getUserInput(message, (input) => {
    const numbers = parseInputToNumbers(input);

    validateNumbers(numbers);

    return numbers;
  });
};

export const getBonusNumber = async (winningNumbers) => {
  return await getUserInput("보너스 번호를 입력해 주세요.", (input) => {
    const bonusNumber = Number(input);

    validateBonusNumber(winningNumbers, bonusNumber);

    return bonusNumber;
  });
};
