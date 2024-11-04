import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/input.js";
import { BONUS_NUMBER, COST, LOTTO_NUMBER } from "./constants/error.js";
import Lotto from "./Lotto.js";

class InputHandler {
  static async getCost() {
    const costInput = (await Console.readLineAsync(INPUT_MESSAGE.COST)).trim();
    const cost = Number(costInput);

    const validatedCost = await InputHandler.validateCost(cost);

    return validatedCost;
  }

  static async validateCost(cost) {
    try {
      this.checkIsString(cost);
      this.checkIsZero(cost);
      this.checkIsNegative(cost);
      this.checkIs1000Units(cost);
      return cost;
    } catch (error) {
      Console.print(error.message);
      return await this.getCost();
    }
  }

  static checkIsString(cost) {
    if (isNaN(cost)) {
      throw new Error(COST.STRING);
    }
  }

  static checkIsZero(cost) {
    if (cost === 0) {
      throw new Error(COST.ZERO);
    }
  }

  static checkIsNegative(cost) {
    if (cost < 0) {
      throw new Error(COST.NEGATIVE);
    }
  }

  static checkIs1000Units(cost) {
    if (cost % 1000 !== 0) {
      throw new Error(COST.REMAINDER);
    }
  }

  static async getWinningNumbers() {
    const winningNumbersInput = (
      await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS)
    ).trim();

    const winningNumbers = winningNumbersInput
      .split(",")
      .map((lottoNumber) => Number(lottoNumber.trim()));

    const validatedWinningNumbers = await InputHandler.validateWinningNumbers(
      winningNumbers
    );

    return validatedWinningNumbers;
  }

  static async validateWinningNumbers(winningNumbers) {
    try {
      this.checkCommaOnly(winningNumbers);
      this.checkWinningNumbersBetween1And45(winningNumbers);
      return winningNumbers;
    } catch (error) {
      if (
        error.message === LOTTO_NUMBER.EXCEPT_COMMA ||
        error.message === LOTTO_NUMBER.LENGTH ||
        error.message === LOTTO_NUMBER.DUPLICATION
      ) {
        return await this.getWinningNumbers();
      }
      Console.print(error.message);
      return await this.getWinningNumbers();
    }
  }

  static checkWinningNumbersBetween1And45(winningNumbers) {
    winningNumbers.forEach((number) => {
      this.checkBetween1And45(number);
    });
  }

  static checkCommaOnly(winningNumbers) {
    new Lotto(winningNumbers);
  }

  static async getBonusNumber(winningNumbers) {
    const bonusNumberInput = (
      await Console.readLineAsync(INPUT_MESSAGE.BONUS)
    ).trim();

    const bonusNumber = Number(bonusNumberInput);

    const validatedBonusNumber = await InputHandler.validateBonusNumber(
      winningNumbers,
      bonusNumber
    );

    return validatedBonusNumber;
  }

  static async validateBonusNumber(winningNumbersArray, bonusNumber) {
    try {
      this.checkBetween1And45(bonusNumber);
      this.checkWinningNumberEqualBonusNumber(winningNumbersArray, bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber(winningNumbersArray);
    }
  }

  static checkBetween1And45(number) {
    if (number < 1 || number > 45) {
      throw new Error(LOTTO_NUMBER.BETWEEN_1_AND_45);
    }
  }

  static checkWinningNumberEqualBonusNumber(winningNumbersArray, bonusNumber) {
    if (winningNumbersArray.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER.EQUAL_WINNING_NUMBERS);
    }
  }
}

export default InputHandler;
