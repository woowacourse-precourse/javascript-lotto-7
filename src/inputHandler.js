import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "./constants/input.js";
import { COST } from "./constants/error.js";

class InputHandler {
  static async getCost() {
    const costInput = (await Console.readLineAsync(inputMessage.cost)).trim();
    const cost = Number(costInput);

    return cost;
  }

  static validateCost(cost) {
    this.checkIsZero(cost);
    this.checkIsNegative(cost);
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
}

export default InputHandler;
