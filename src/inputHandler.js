import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/input.js";
import { COST } from "./constants/error.js";

class InputHandler {
  static async getCost() {
    const costInput = (await Console.readLineAsync(INPUT_MESSAGE.cost)).trim();
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

    return winningNumbersInput;
  }
}

export default InputHandler;
