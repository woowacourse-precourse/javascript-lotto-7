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
    if (cost === 0) {
      throw new Error(COST.ZERO);
    }
  }
}

export default InputHandler;
