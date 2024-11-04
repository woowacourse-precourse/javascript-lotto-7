import { Console } from "@woowacourse/mission-utils";
import ErrorHandler from "../utils/ErrorHandler.js";
import {
  ERROR_MESSAGES,
  LOTTO_SIZE,
  LOTTO_UNIT,
  MAX_NUMBER,
  MIN_NUMBER,
  PROMPTS,
} from "../utils/constants.js";

// input들을 관리하는 클래스
class InputHandler {
  async handleInput(prompt, validateFn) {
    while (true) {
      const input = await Console.readLineAsync(prompt);
      try {
        return validateFn(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getPurchaseAmount() {
    return this.handleInput(
      PROMPTS.PURCHASE_AMOUNT,
      this.validatePurchaseAmount
    );
  }

  async getWinningNumber() {
    return this.handleInput(PROMPTS.WINNING_NUMBER, this.validateWinningNumber);
  }

  async getBonusNumber(WinningLottoNumbersArray) {
    return this.handleInput(PROMPTS.BONUS_NUMBER, (input) =>
      this.validateBonusNumber(input, WinningLottoNumbersArray)
    );
  }

  validatePurchaseAmount(input) {
    const purchaseAmount = Number(input);
    if (
      isNaN(purchaseAmount) ||
      purchaseAmount <= 0 ||
      purchaseAmount % LOTTO_UNIT !== 0
    )
      ErrorHandler.throwError(ERROR_MESSAGES.PURCHASE_AMOUNT);
    return purchaseAmount / LOTTO_UNIT;
  }

  validateWinningNumber(input) {
    const numbers = input.split(",").map(Number);
    if (numbers.length !== LOTTO_SIZE)
      ErrorHandler.throwError(ERROR_MESSAGES.WINNING_SIZE);
    if (numbers.some((number) => isNaN(number)))
      ErrorHandler.throwError(ERROR_MESSAGES.NUMBER_ONLY);
    if (numbers.some((number) => number < MIN_NUMBER || number > MAX_NUMBER))
      ErrorHandler.throwError(ERROR_MESSAGES.RANGE);
    if (new Set(numbers).size !== numbers.length)
      ErrorHandler.throwError(ERROR_MESSAGES.DUPLICATE_NUMBER);

    return numbers;
  }

  validateBonusNumber(input, WinningLottoNumbersArray) {
    const bonusNumber = Number(input);
    if (isNaN(bonusNumber)) ErrorHandler.throwError(ERROR_MESSAGES.NUMBER_ONLY);
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER)
      ErrorHandler.throwError(ERROR_MESSAGES.RANGE);
    if (WinningLottoNumbersArray[bonusNumber] === 1)
      ErrorHandler.throwError(ERROR_MESSAGES.DUPLICATE_WINNING_BONUS);
    return bonusNumber;
  }
}

export default InputHandler;
