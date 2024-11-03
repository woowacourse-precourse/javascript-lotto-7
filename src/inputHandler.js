import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/input.js";
import { BONUS_NUMBER, COST } from "./constants/error.js";
import Lotto from "./Lotto.js";

class InputHandler {
  static async getCost() {
    const costInput = (await Console.readLineAsync(INPUT_MESSAGE.COST)).trim();
    const cost = Number(costInput);

    return cost;
  }

  static validateCost(cost) {
    this.checkIsString(cost);
    this.checkIsZero(cost);
    this.checkIsNegative(cost);
    this.checkIs1000Units(cost);
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

    return winningNumbers;
  }

  static validateWinningNumbers(winningNumbers) {
    this.checkCommaOnly(winningNumbers);
  }

  static checkCommaOnly(winningNumbers) {
    new Lotto(winningNumbers);
  }

  static async getBonusNumber() {
    const bonusNumberInput = (
      await Console.readLineAsync(INPUT_MESSAGE.BONUS)
    ).trim();

    const bonusNumber = Number(bonusNumberInput);

    return bonusNumber;
  }

  static validateBonusNumber(winningNumbersArray, bonusNumber) {
    this.checkBetween1And45(bonusNumber);
    this.checkWinningNumberEqualBonusNumber(winningNumbersArray, bonusNumber);
  }

  static checkBetween1And45(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(BONUS_NUMBER.BETWEEN_1_AND_45);
    }
  }

  static checkWinningNumberEqualBonusNumber(winningNumbersArray, bonusNumber) {
    if (winningNumbersArray.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER.EQUAL_WINNING_NUMBERS);
    }
  }
}

export default InputHandler;
